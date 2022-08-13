import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLogin } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
  const { state } = useLocation();
  const isLogin = useSelector(getIsLogin);

  return isLogin ? (
    <Navigate to={state?.pathname ? state.pathname : '/'} />
  ) : (
    children
  );
}
