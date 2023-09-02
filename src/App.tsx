import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Articles } from './pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
