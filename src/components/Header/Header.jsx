import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

import Logo from 'components/Shared/Logo';
import UserInfo from 'components/UserInfo';
import Navigation from 'components/Navigation';

import s from './Header.module.scss';

const isUserLogin = false;
const currentPageIsLogin = true;
const currentPageIsRegistration = false;
const isRender = currentPageIsLogin || currentPageIsRegistration;

const Header = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const currentURL =
    window.location.href.includes('registration') ||
    window.location.href.includes('login');

  useEffect(() => {
    console.log(currentURL);
  });

  if (!isUserLogin) {
    if (isDesctop && currentURL) {
      return (
        <header className={s.header}>
          <Logo />
        </header>
      );
    }

    return (
      <header className={s.header}>
        <Logo />
        <div className={s.wrap}>
          <UserInfo />
        </div>
      </header>
    );
  }

  if (isUserLogin) {
    return (
      <header className={s.header}>
        <Logo />
        {!isDesctop && <UserInfo />}
      </header>
    );
  }
};

export default Header;
