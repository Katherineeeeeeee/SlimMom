import Logo from 'components/Shared/Logo';
import UserInfo from 'components/UserInfo';
// import Navigation from 'components/Navigation';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <UserInfo />
    </header>
  );
};

export default Header;
