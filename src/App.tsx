import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CommitPage from './components/pages/CommitPage';
import MainPage from './components/pages/MainPage';
import ProfilePage from './components/pages/ProfilePage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/commit" element={<CommitPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
