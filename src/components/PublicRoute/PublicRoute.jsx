import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
  const { state } = useLocation();
  const accessToken = useSelector(getToken);

  return accessToken ? (
    <Navigate to={state?.pathname ? state.pathname : '/'} />
  ) : (
    children
  );
}
