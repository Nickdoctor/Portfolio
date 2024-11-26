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
            <Container className = "mx-auto">
            <Navbar.Brand onClick={() => handleNavigation('/')}>
                My Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "mx-auto">
                <Nav.Link onClick={() => handleNavigation('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => handleNavigation('/AboutMe')}>About Me</Nav.Link>
                <Nav.Link onClick={() => handleNavigation('/Portfolio')}>Portfolio</Nav.Link>
                <Nav.Link onClick={() => handleNavigation('/ContactMe')}>Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    );
};

export default MyNavbar;
