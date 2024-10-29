// src/app/auth/login/page.tsx

'use client';

import { signIn } from 'next-auth/react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

const AuthPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '20px' }}>
      <h1>Welcome to Meow-Insta</h1>
      <p>Register to continue</p>


      <Button
        variant="outlined"
        color="primary"
        startIcon={<GoogleIcon />}
        onClick={() => signIn('google')}
      >
        Register with Google
      </Button>
    </div>
  );
};

export default AuthPage;
