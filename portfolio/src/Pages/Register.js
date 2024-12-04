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
//import supabase from '../config/supabaseClient.js';

const RegisterPage = () => {
    return (
<section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" >
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="typeEmailX-2"/>
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

            
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-lg btn-block btn-primary"
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-lg btn-block btn-primary mb-2"
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)};
export default RegisterPage;