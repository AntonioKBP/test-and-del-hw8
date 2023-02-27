import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
// import { Box } from 'components/Box/Box.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
