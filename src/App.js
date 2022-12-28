import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Home/Navbar/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <div>
        <h1>
          Hello World
        </h1>
      </div>
    </>
  );

}

export default App;