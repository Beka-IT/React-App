import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Articles } from './pages/Articles';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
