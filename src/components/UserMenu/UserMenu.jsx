// import { NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAuthToken } from 'redux/auth/auth-selectors';
// import { useEffect } from 'react';
// import { selectProfile } from 'redux/profile/profile.selectors';
// import { getProfileThunk } from 'redux/profile/profile.thunk';
// import { authLogoutThunk } from 'redux/auth/auth.thunk';

export const UserMenu = () => {
  // const handleLogOut = () => {
  //   const token = useSelector(selectAuthToken);
  //   const dispatch = useDispatch();
  //   const profile = useSelector(selectProfile);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (token) {
  //       dispatch(getProfileThunk());
  //     }
  //   }, [token, dispatch]);

  //   dispatch(authLogoutThunk());
  //   navigate('/', { replace: true });
  // };

  return (
    <>
      {/* <h2>Welcome Back{profile.name}</h2>
      <button onClick={handleLogOut}>Log Out</button>
      <NavLink to={'/contacts'}>Contacts</NavLink> */}
    </>
  );
};
