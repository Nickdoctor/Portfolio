import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand" onClick={() => handleNavigation('/')}>
                My Portfolio
            </div>
            <ul className="navbar-links">
                <button onClick={() => handleNavigation('/')}>Home</button>
                <button onClick={() => handleNavigation('/AboutMe')}>About Me</button>
                <button onClick={() => handleNavigation('/Portfolio')}>Portfolio</button>
                <button onClick={() => handleNavigation('/ContactMe')}>Contact Me</button>
            </ul>
        </nav>
    );
};

export default Navbar;
