import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand" onClick={() => handleNavigation('/')}>
                MyPortfolio
            </div>
            <ul className="navbar-links">
                <li onClick={() => handleNavigation('/')}>Home</li>
                <li onClick={() => handleNavigation('/about')}>About</li>
                <li onClick={() => handleNavigation('/projects')}>Projects</li>
                <li onClick={() => handleNavigation('/contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
