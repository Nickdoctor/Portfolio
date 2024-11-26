import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <IconButton
        aria-label="Instagram"
        component="a"
        href="https://www.instagram.com/nickdoctor2/"
        target="_blank"
        size="large"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="GitHub"
        component="a"
        href="https://github.com/Nickdoctor"
        target="_blank"
        size="large"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/nicolas-gugliemo-5776631b9/"
        target="_blank"
        size="large"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;