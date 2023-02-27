import { PageContainer, HomePageText } from './HomePage.styled';
import {
  selectAuthIsLoggedIn,
  selectAuthName,
} from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const name = useSelector(selectAuthName);

  return (
    <>
      <PageContainer>
        {isLoggedIn ? (
          <>
            <h2>Welcome back {name}</h2>
            <HomePageText>
              Please press button below to have access to your PhoneBook
            </HomePageText>
            <Link to="/contacts">Contacts</Link>
          </>
        ) : (
          <>
            <h2>Welcome to PhoneBook</h2>
            <HomePageText>
              To have access to your PhoneBook please Sign-Up,or Login if you
              are already have an account
            </HomePageText>
          </>
        )}
      </PageContainer>
    </>
  );
};
