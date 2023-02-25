import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector();
  return (
    <header>
      <div>
        <UserMenu />
        <AuthNav />
      </div>
    </header>
  );
};
