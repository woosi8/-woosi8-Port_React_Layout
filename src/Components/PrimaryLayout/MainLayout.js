import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  // backgroundColor: 'white',
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  width: '100%'
}));

const MainLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
}));

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = styled('div')(({ theme }) => ({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
}));

const MainLayout = () => (
  <MainLayoutRoot>
    <MainLayoutWrapper>
      <MainLayoutContainer>
        <MainLayoutContent>
          <Outlet />
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default MainLayout;
