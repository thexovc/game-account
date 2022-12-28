import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Auth from './components/Auth';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );

}

export default App;