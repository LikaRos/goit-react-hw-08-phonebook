import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLogin } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const isLogin = useSelector(getIsLogin);
  const { pathname } = useLocation();
  return isLogin ? (
    children
  ) : (
    <Navigate to="/goit-react-hw-08-phonebook/login" state={{ pathname }} />
  );
}
