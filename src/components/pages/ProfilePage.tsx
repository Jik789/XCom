import React from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store/store';
import { IProfileTable } from '../../utils/interface';
import { ProfileTableMock } from '../../utils/mock';
import { LoaderComponent } from '../common/LoaderComponent';
import { useSearchUserQuery } from '../DATA/api';
import ProfileTable from './TableComponent/ProfileTable';

function ProfilePage() {
  const userName = useAppSelector((state) => state.inputName);
  const navigate = useNavigate();
  const { isLoading, isError, data } = useSearchUserQuery(userName.value, {
    skip: userName.value === '',
  });

  return (
    <div className="p-8 flex flex-col items-center justify-center w-screen h-screen">
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
                Назад к поиску
              </button>
            </>
          ) : (
            <>
              <div className="text-center text-3xl flex p-4 gap-10 items-center justify-center">
                <div className="max-w-xs h-40">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={data?.avatar_url}
                    alt="card-img"
                  />
                </div>
                <h2 className="font-bold">{data?.login}</h2>
              </div>
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
                  {ProfileTableMock.map((item: IProfileTable) => (
                    <ProfileTable key={item.id} item={item} />
                  ))}
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
