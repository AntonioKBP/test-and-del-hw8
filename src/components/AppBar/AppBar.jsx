// import { NavLink } from 'react-router-dom';
import {
  selectAuthIsLoggedIn,
  selectAuthName,
} from 'redux/auth/auth-selectors';

import { Header, HeaderWrapper, NaviLink } from './AppBar.styled';

import { useSelector, useDispatch } from 'react-redux';

import { logoutThunk } from 'redux/auth/auth.thunk';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const name = useSelector(selectAuthName);
  const dispatch = useDispatch();

  return (
    <Header>
      <HeaderWrapper>
        <nav>
          {isLoggedIn ? (
            <button onClick={() => dispatch(logoutThunk())}>LogOut</button>
          ) : (
            <>
              <NaviLink to="/login">Login</NaviLink>
              <NaviLink to="/signin">Sign In</NaviLink>
            </>
          )}
        </nav>
        {isLoggedIn && <p>Hello {name}</p>}
      </HeaderWrapper>
    </Header>
  );
};
