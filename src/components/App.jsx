import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const NotFound = lazy(() => import('../views/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

  return (
    <div className="backimage">
      <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/goit-react-hw-08-phonebook/register"
              element={
                <PublicRoute redirectTo="/goit-react-hw-08-phonebook/contacts">
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/goit-react-hw-08-phonebook/login"
              element={
                <PublicRoute redirectTo="/goit-react-hw-08-phonebook/contacts">
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/goit-react-hw-08-phonebook/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
