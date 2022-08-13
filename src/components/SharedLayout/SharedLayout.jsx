import Navigation from '../Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const SharedLayout = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
