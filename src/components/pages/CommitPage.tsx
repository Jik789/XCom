import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAppSelector } from '../../store/store';
import { CommitTable } from '../../utils/type';
import { LoaderComponent } from '../common/LoaderComponent';
import { useSearchUserAndRepoQuery } from '../DATA/api';
import CommitTableComponent from './TableComponent/CommitTableComponent';

function CommitPage() {
  const { repo } = useParams();
  const user = useAppSelector((state) => state.inputName);
  const navigate = useNavigate();
  const { isLoading, isError, data } = useSearchUserAndRepoQuery({
    userName: user.value,
    repoName: repo ?? '',
  });

  return (
    <div className="text-center text-normal flex flex-col items-center justify-center p-8 gap-2">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          {isError ? (
            <>
              <div>Ошибка обработки запроса</div>
              <button
                onClick={() => navigate('/')}
                className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm"
              >
                Назад к поиску
              </button>
            </>
          ) : (
            <>
              <button
                className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm"
                onClick={() => navigate('/profile')}
              >
                Назад в профиль
              </button>
              <table className="border-collapse border border-slate-300 border-separate border-spacing-4 align-middle text-center">
                <caption>История репозитория {repo}</caption>
                <thead>
                  <tr>
                    <th>Автор</th>
                    <th>ХЭШ</th>
                    <th>Дата</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ? data.map((item: CommitTable) => (
                        <CommitTableComponent key={item.sha} item={item} />
                      ))
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

export default CommitPage;
