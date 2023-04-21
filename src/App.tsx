import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/ProfilePage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<MainPage />}></Route>
        <Route path="/" element={<ProfilePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
