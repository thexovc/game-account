import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Sellers from './Pages/DashBoard/Sellers/Sellers';
import { SellersSearch } from './Pages/DashBoard/Sellers/SellersSearch/SellersSearch';
import Dashboard from "./Pages/DashBoard/Dashboard";
import Profile from './Pages/DashBoard/Profile/Profile';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sellers_search' element={<SellersSearch />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </>
  );

}

export default App;