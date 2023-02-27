import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// export const PublicRoute = () => {
//   const token = useSelector(selectAuthToken);
//   return token ? <Navigate to="/" replace /> : <Outlet />;
// };
