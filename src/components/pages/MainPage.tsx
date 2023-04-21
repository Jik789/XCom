import React from 'react';

function MainPage() {
  return (
    <div className="text-center text-3xl flex flex-col items-center justify-center p-8 gap-2 w-screen h-screen">
      <h1 className="font-bold">Поиск пользователей GitHub</h1>
      <div className="flex items-center justify-center w-auto gap-2">
        <input
          className="font-bold text-base block w-full bg-white border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-200 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="search"
        ></input>
        <button className="ease duration-300 font-bold text-base bg-sky-200 hover:bg-sky-400 active:bg-sky-500 rounded-md px-4 py-1 shadow-sm">
          Поиск
        </button>
      </div>
    </div>
  );
}

export default MainPage;
