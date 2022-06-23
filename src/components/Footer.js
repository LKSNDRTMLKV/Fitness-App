import React from 'react';
import { Stack, Typography, Box,  } from '@mui/material';
import Logo from '../assets/images/Logo.png';


const Footer = (props) => {
    return (
        <Box mt="60px">
        <Stack gap="10px" sx={{ alignItems: 'center', justifyContent:"center" }} flexWrap="wrap" px="40px" pt="24px">
        <Typography variant="h5" textTransform="capitalize" sx={{ fontSize: { lg: '28px', xs: '20px' } }} my="20px" textAlign="center">Made with ❤️ by Temelkov, project from JavaScript Mastery </Typography>
        
        </Stack>
      </Box>
    );
};

export default Footer;