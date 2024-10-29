// src/components/NavBar.tsx

"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/podmienky');
        break;
      case 2:
        router.push('/auth/registracia');
        break;
      case 3:
        router.push('/auth/prihlasenie');
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <Box
      sx={{
        height: '60px', // Set a height for the bottom navigation
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
        sx={{ width: 500 }} // Adjust width if needed
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Pridať" icon={<AddCircleIcon />} />
        {!session ? ( <BottomNavigationAction label="Registrácia" icon={<AppRegistrationIcon />} onClick={() => router.push('/auth/registracia')} />) : null}
        {!session ? ( <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} onClick={() => router.push('/auth/prihlasenie')} />) : null}
        {session ? ( <BottomNavigationAction label="Odhlásenie" icon={<LogoutIcon />} onClick={handleLogout} />) : null}
      </BottomNavigation>
    </Box>
  );
}
