import React from 'react';
import { IRepo } from '../../utils/interface';
import { repoMock } from '../../utils/mock';
import ProfileTable from './ProfilePageComponent/ProfileTable';

function ProfilePage() {
  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="text-center text-3xl flex p-4 gap-10 items-center justify-center">
        <div className="max-w-xs h-80">
          <img
            className="object-cover w-full h-full rounded-full"
            src={'https://homo-science.ru/static/uploads/8e0e4029-1647-4b3f-aff9-c0fe1728506b.jpg'}
            alt="card-img"
          />
        </div>
        <h2 className="font-bold">User Name</h2>
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
          {repoMock.map((item: IRepo) => (
            <ProfileTable key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfilePage;
