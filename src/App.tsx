import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Cursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;