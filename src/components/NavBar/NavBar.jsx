import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import { tokenSelector } from 'redux/auth/selectors';
import { Suspense } from 'react';
import { Spinner } from 'components/Spiner/Spiner';
import { AppBarComp } from './NavBar.styled';

const NavBar = () => {
  const auth = useSelector(tokenSelector);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarComp position="fixed">
          <Toolbar>
            <Navigation />
            {auth ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBarComp>
      </Box>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavBar;
