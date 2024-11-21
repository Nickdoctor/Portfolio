import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import HomePage from './Pages/Home.js';
import AboutMePage from './Pages/AboutMe.js'; 
import './App.css';

const App = () =>{
  return (
            <Router> 
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/AboutMe" element={<AboutMePage />} />
                    </Routes>
            </Router>
  );
}

export default App;
