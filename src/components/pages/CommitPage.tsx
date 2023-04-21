import React from 'react';
import { ICommitTable } from '../../utils/interface';
import { CommitTableMock } from '../../utils/mock';
import CommitTable from './TableComponent/CommitTable';

function CommitPage() {
  return (
    <div className="text-center text-normal flex flex-col items-center justify-center p-8 gap-2 w-screen h-screen">
      <button className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm">
        Назад
      </button>
      <table className="border-collapse border border-slate-300 border-separate border-spacing-4 align-middle text-center">
        <caption>История репозитория</caption>
        <thead>
          <tr>
            <th>Автор</th>
            <th>ХЭШ</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {CommitTableMock.map((item: ICommitTable) => (
            <CommitTable key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommitPage;
