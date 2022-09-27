import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import s from './Header.module.scss';

import Logo from 'components/Shared/Logo';
import UserInfo from 'components/UserInfo';
import Navigation from 'components/Navigation';

import arrow from '../../images/header/arrow.svg';

import { getLogin } from 'redux/auth/auth-selectors';

const Header = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { pathname } = useLocation();
  const isRender = pathname === '/login' || pathname === '/registration';
  const isPathcalculate = pathname === '/calculator-calories';
  const isUserLogin = useSelector(getLogin);

  if (!isUserLogin) {
    if (isDesctop && isRender) {
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
    if (isMobile) {
      return (
        <header className={s.headerIsLogin}>
          <div className={s.headerNav}>
            <Logo />
            <Navigation />
          </div>
          <div className={s.userInfo}>
            <UserInfo />
            {!isPathcalculate && (
              <Link to="/calculator-calories">
                <img src={arrow} alt="arrow" />
              </Link>
            )}
          </div>
        </header>
      );
    }

    if (isTablet) {
      return (
        <>
          <header className={s.headerIsLogin}>
            <div className={s.headerNav}>
              <Logo />

              <div className={s.userInfoTablet}>
                <UserInfo />
                <Navigation />
              </div>
            </div>
          </header>
        </>
      );
    }

    if (isDesctop) {
      return (
        <>
          <header className={s.headerIsLogin}>
            <div className={s.headerNavDesc}>
              <div className={s.logoNavWrap}>
                <Logo />
                <Navigation />
              </div>

              <div className={s.userInfoDesct}>
                <UserInfo />
              </div>
            </div>
          </header>
        </>
      );
    }
  }
};

export default Header;
