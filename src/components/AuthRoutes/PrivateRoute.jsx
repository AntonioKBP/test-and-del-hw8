import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthToken,
  selectAuthIsRefreshing,
} from '../../redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const token = useSelector(selectAuthToken);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const shouldRedirect = !token && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

// export const PrivateRoute = () => {
//   const token = useSelector(selectAuthToken);
//   return token ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export const PrivateRoute = ({
//   componnent: Component,
//   redirectTo = '/',
// }) => {
//   const token = useSelector(selectAuthToken);
//   return token ? <Navigate to={redirectTo} /> : <Component />;
// };
