import React, { useState } from 'react';
import { inputNameWrite } from '../../store/features/inputNameSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const textInputSelector = useAppSelector((state) => state.inputName);
  const dispatch = useAppDispatch();
  const [storage, storageChange] = useState(textInputSelector.value);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    storageChange(event.target.value);
  };

  const handleInputSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(inputNameWrite(storage));
    navigate('/profile');
  };

  return (
    <div className="text-center text-3xl flex flex-col items-center justify-center p-8 gap-2 w-screen h-screen">
      <h1 className="font-bold">Поиск пользователей GitHub</h1>
      <form className="flex items-center justify-center w-auto gap-2" onSubmit={handleInputSubmit}>
        <input
          className="font-bold text-base block w-full bg-white border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-200 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="search"
          value={storage}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm"
        >
          Поиск
        </button>
      </form>
    </div>
  );
}

export default MainPage;
