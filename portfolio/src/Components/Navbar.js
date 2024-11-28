import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Navbar expand= "lg" className="bg-body-tertiary d-flex justify-content-center align-items-center">
            <Container className = "justify-content-center">
            <Navbar.Brand onClick={() => handleNavigation('/')} className='justify-content-center text-center'>
                My Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "justify-content-center d-flex justify-content-center gap-5">
                <Nav.Link  className="btn btn-primary me-2" onClick={() => handleNavigation('/')}>Home</Nav.Link>
                <Nav.Link  className="btn btn-primary me-2" onClick={() => handleNavigation('/AboutMe')}>About Me</Nav.Link>
                <Nav.Link  className="btn btn-primary me-2" onClick={() => handleNavigation('/Portfolio')}>Portfolio</Nav.Link>
                <Nav.Link  className="btn btn-primary me-2" onClick={() => handleNavigation('/ContactMe')}>Contact Me</Nav.Link>
            </Nav>
            <Nav className="ms-auto gap-3">
        <Nav.Link className="btn btn-primary me-2" onClick={() => handleNavigation('/Login')}>Login</Nav.Link>
        <Nav.Link className="btn btn-outline-secondary" onClick={() => handleNavigation('/Register')}>Signup</Nav.Link>
             </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    );
};

export default MyNavbar;
