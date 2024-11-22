import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import HomePage from './Pages/Home.js';
import AboutMePage from './Pages/AboutMe.js'; 
import PortfolioPage from './Pages/Portfolio.js';
import ContactMePage from './Pages/ContactMe.js';

import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import './App.css';

const App = () =>{
  return (
            <Router> 
              <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/AboutMe" element={<AboutMePage />} />
                        <Route path="/Portfolio" element={<PortfolioPage />} />
                        <Route path="/ContactMe" element={<ContactMePage />} />
                    </Routes>
              <Footer/>
            </Router>
  );
}

export default App;
