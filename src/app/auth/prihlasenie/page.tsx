// src/app/auth/login/page.tsx

'use client';

import { signIn } from 'next-auth/react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Container, Typography } from '@mui/material'; // Import Container and Typography

const AuthPage = () => {
  return (
    <Container 
      maxWidth="sm" 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '40px' }}
    >
      <Typography variant="h4" component="h1" align="center">
        Welcome to Meow-Insta
      </Typography>
      <Typography variant="body1" align="center">
        Sign in to continue
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        onClick={() => signIn('google')}
      >
        Sign in with Google
      </Button>
    </Container>
  );
};

export default AuthPage;
