import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';

import { Main } from './TitleAndMainStyled/TitleAndMainStyled.styled';

import Layout from './Layout/Layout';
import { LoginForm } from './pages/LoginForm/LoginForm';
import { SignUpForm } from './pages/SignUpForm/SignUpForm';
import { Contacts } from './pages/Contacts/Contacts';
import { RestrictedRoute } from './AuthRoutes/RestrictedRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';
import { HomePage } from './pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { refreshUserThunk } from 'redux/auth/auth.thunk';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUserThunk());
    }
  }, [dispatch, token]);

  return (
    <Main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />;
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginForm} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                component={SignUpForm}
                redirectTo={'/contacts'}
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo={'/'} />}
          />
        </Route>
      </Routes>
    </Main>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.number.isRequired,
      number: PropTypes.number,
    })
  ),
  filter: PropTypes.string,
};

//  <Main>
//    <Routes>
//      <Route path="/" element={<Layout />}>
//        <Route path="" element={<PublicRoute />}>
//          <Route path="/login" element={<LoginForm />} />
//          <Route path="/sign-up" element={<SignUpForm />} />
//        </Route>

//        <Route path="/" element={<RestrictedRoute />}>
//          <Route path="/contacts" element={<Contacts />} />
//        </Route>
//      </Route>
//    </Routes>
//  </Main>;

//  <Route path="/" element={<HomePage />} />;

//  <Routes>
//    <Route path="" element={<Layout />}>
//      <Route path="/" element={<PublicRoute />}>
//        <Route path="/login" element={<LoginForm />} />
//        <Route path="/sign-up" element={<SignUpForm />} />
//      </Route>

//      <Route path="" element={<PrivateRoute />}>
//        <Route path="/contacts" element={<Contacts />} />
//      </Route>
//    </Route>
//  </Routes>;
