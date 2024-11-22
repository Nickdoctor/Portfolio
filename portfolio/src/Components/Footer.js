import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton
                  aria-label="Instagram"
                  component="a"
                  href="https://www.instagram.com/nickdoctor2/"
                  target = "_blank"
                  size="large"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
  );
};

export default Footer;