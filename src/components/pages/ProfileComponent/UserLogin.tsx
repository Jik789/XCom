import React from 'react';
import { useAppSelector } from '../../../store/store';
import { useSearchUserQuery } from '../../DATA/api';

function UserLogin() {
  const userName = useAppSelector((state) => state.inputName);
  const { data } = useSearchUserQuery(userName.value);

  return (
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
  );
}

export default UserLogin;
