import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthLoggedIn, selectAuthName } from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  const name = useSelector(selectAuthName);
  const dispatch = useDispatch();
  return (
    <header>
      <div className="wrapper">
        <nav>
          {isLoggedIn ? (
            <button onClick={() => dispatch()}>LogOut</button>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signin">Sign In</NavLink>
            </>
          )}
        </nav>
        {isLoggedIn && <p>Hello {name}</p>}
      </div>
    </header>
  );
};
