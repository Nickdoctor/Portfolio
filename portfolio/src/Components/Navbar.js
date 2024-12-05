import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  supabase  from '../supabaseClient'; 

const MyNavbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
    };

    useEffect(() => {
        // Check if a user is already logged in when the component mounts
        const checkAuthStatus = async () => {
          const { data: { session } } = await supabase.auth.getSession();
          setIsLoggedIn(!!session);
        };
    
        checkAuthStatus();
    
        // Set up an auth state listener
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
          setIsLoggedIn(!!session);
        });
    
        // Clean up the listener on unmount
        return () => {
          authListener.subscription.unsubscribe();
        };
      }, []);

      const handleSignOut = async () => {
        try {
          const { error } = await supabase.auth.signOut();
          if (error) throw error;
    
          console.log('User signed out successfully');
          setIsLoggedIn(false);
          window.location.reload();
          navigate('/'); // Redirect to home or login page after sign-out
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
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
            {isLoggedIn ? (
        <Nav.Link
          className="btn btn-primary me-2"
          onClick={handleSignOut}
        >
          Sign Out
        </Nav.Link>
      ) : (
        <Nav.Link
          className="btn btn-primary me-2"
          onClick={() => handleNavigation('/Login')}
        >
          Login
        </Nav.Link>
      )}
        <Nav.Link className="btn btn-outline-secondary" onClick={() => handleNavigation('/Register')}>Signup</Nav.Link>
             </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    );
};

export default MyNavbar;
