import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/ >
    </BrowserRouter>
  )
}

export default App;