import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Box, Hidden, Stack } from '@mui/material';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import AppNavbar from './AppNavbar/AppNavbar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const DashboardLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  // paddingTop: 100,
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 34
  // [theme.breakpoints.up('lg')]: {
  //   paddingLeft: 280
  // }
}));

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')(({ theme }) => ({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
}));

const DashBoardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem('ID')) {
      navigate('/login');
    }
    setMobileNavOpen(false);
  }, [navigate, location.pathname]);

  return (
    <DashboardLayoutRoot>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <AppNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Hidden lgDown>
              <Box sx={{ height: 94 }} />
            </Hidden>
            <Hidden lgUp>
              <Box sx={{ height: 46 }} />
            </Hidden>
            <Stack direction="row">
              <Hidden lgDown>
                <Box sx={{ height: '100%', width: 256 }} />
              </Hidden>
              <Outlet />
            </Stack>
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashBoardLayout;
