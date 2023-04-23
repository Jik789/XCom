import React from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store/store';
import { UserRepoGithub } from '../../utils/type';
import { LoaderComponent } from '../common/LoaderComponent';
import { useSearchRepoQuery } from '../DATA/api';
import UserLogin from './ProfileComponent/UserLogin';
import ProfileTable from './TableComponent/ProfileTable';

function ProfilePage() {
  const userName = useAppSelector((state) => state.inputName);
  const navigate = useNavigate();
  const { isLoading, isError, data } = useSearchRepoQuery(userName.value);

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          {isError ? (
            <>
              <div>Пользователя нет</div>
              <button
                onClick={() => navigate('/')}
                className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm"
              >
                Назад к поиску пользователя
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/')}
                className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm"
              >
                Назад к поиску пользователя
              </button>
              <UserLogin />
              <table className="border-collapse border border-slate-300 border-separate border-spacing-4 align-middle text-center">
                <caption>Список публичных репозиториев</caption>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Язык</th>
                    <th>Описание</th>
                    <th>Количество звезд</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ? data.map((item: UserRepoGithub) => <ProfileTable key={item.id} item={item} />)
                    : []}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ProfilePage;
// data.map((item: IProfileTable) => <ProfileTable key={item.id} item={item} />
