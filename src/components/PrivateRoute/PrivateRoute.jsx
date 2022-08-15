import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const accessToken = useSelector(getToken);
  const { pathname } = useLocation();
  return accessToken ? children : <Navigate to="/login" state={{ pathname }} />;
}
