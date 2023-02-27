// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAuthToken } from 'redux/auth/auth-selectors';
// import { useEffect } from 'react';
// import { selectProfile } from 'redux/profile/profile.selectors';
// import { getProfileThunk } from 'redux/profile/profile.thunk';
// import { authLogoutThunk } from 'redux/auth/auth.thunk';

// export const AuthNav = () => {
//   const token = useSelector(selectAuthToken);
//   const dispatch = useDispatch();
//   const profile = useSelector(selectProfile);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     if (token) {
//       dispatch(getProfileThunk());
//     }
//   }, [token, dispatch]);

//   // const handleLogOut = () => {
//   //   dispatch(authLogoutThunk());
//   //   navigate('/', { replace: true });
//   // };

//   return (
//     <div>
//       <div>
//         {!token && <p>Please Login</p>}
//         {token && profile && (
//           <>
//             <h2>Welcome Back {profile.name}</h2>
//             <button onClick={() => dispatch(authLogoutThunk())}>Log Out</button>
//             <NavLink to={'/contacts'}>Contacts</NavLink>
//           </>
//         )}
//         {token ? (
//           <></>
//         ) : (
//           <>
//             <NavLink to={'/'}>Home</NavLink>
//             <NavLink to={'sign-up'}>Sign Up</NavLink>
//             <NavLink to={'login'}>Login</NavLink>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
