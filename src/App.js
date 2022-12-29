import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Home/Footer/Footer';
import Navbar from './components/Home/Navbar/Navbar';
import Home from './Pages/Home/Home';


function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

}

export default App;