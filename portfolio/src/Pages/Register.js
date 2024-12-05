import React, { useState } from 'react';
import '../Styles/Register.css';
//import axios from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, IconButton, InputAdornment, Modal, CircularProgress } from '@mui/material';
import FaceBookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import supabase from '../supabaseClient.js';

const RegisterPage = () => {

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGoogleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
  
      if (error) {
        console.error('Google Sign-In Error:', error.message);
        return;
      }
  
      // Optional: Redirect user to home or dashboard
      console.log('Google sign-in successful:', data);
    } catch (error) {
      console.error('Unexpected error during Google sign-in:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Authenticate user
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            FirstName: formData.FirstName,
            LastName: formData.LastName,
          },
        },
      });
      if (error) throw error;
      alert('Registration successful! Check your email for confirmation.');
      navigate('/');
    } catch (error) {
      console.error('Sign-up failed:', error);
      setError('Sign-up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <body>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5 rounded shadow hover-effect">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5 ">Sign Up</h5>
                <form onSubmit={handleSubmit}>
                <TextField fullWidth name="FirstName" label="First Name" type="text" variant="outlined" value={formData.FirstName} onChange={handleChange} sx={{ mt: 1, mb: 1 }} required />
                <TextField fullWidth name="LastName" label="Last Name" type="text" variant="outlined" value={formData.LastName} onChange={handleChange} sx={{ mt: 1, mb: 1 }} required />
                  <TextField fullWidth name="email" label="Email" type="email" variant="outlined" value={formData.email} onChange={handleChange} sx={{ mt: 1, mb: 1 }} required />
                  <div class="form-floating mb-3">
                    <TextField fullWidth name="password" label="Password" type={formData.showPassword ? "text" : "password"} variant="outlined" value={formData.password} onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPasswordClick}>
                              {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      sx={{ mt: 1 }}
                      required
                    />
                  </div>
                  <div class="d-grid">
                    <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
                      Sign Up
                    </Button>
                  </div>
                  <hr class="my-4" />
                  <div class="d-grid mb-2">
                    <button class="btn btn-google btn-login text-uppercase fw-bold" onClick= {handleGoogleSignIn}>
                      <i class="fab fa-google me-2"></i> Sign Up with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
};
export default RegisterPage;