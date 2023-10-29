import React from 'react';
import './App.css';
import Header from './components/header/Header';

function Home() {
  return (
    <div className="flex h-[100vh] w-[100%] bg-gray-900 flex-col">
      <Header />
    </div>
  );
}

export default Home;
