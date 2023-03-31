import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MainState from './context/MainState';
import Admin from './components/Admin/Admin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';import { useState } from 'react';
;

const App = () => {
  const notify=(type, message)=>{
    if(type==='success')
    {
      toast.success(message);
    }
    else
    {
      toast.error(message);
    }
  };

  return (
    <MainState>
      <BrowserRouter>
        <ToastContainer />
        <Navbar notify={notify} />
        <Routes>
          <Route path="/" element={<Home notify={notify} />} />
          <Route path="/admin" element={<Admin notify={notify} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainState>
  )
}

export default App;
