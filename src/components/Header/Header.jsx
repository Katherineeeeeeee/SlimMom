import { useMediaQuery } from 'react-responsive';

import Logo from 'components/Shared/Logo';
import UserInfo from 'components/UserInfo';

import { useLocation} from 'react-router-dom'

import s from './Header.module.scss';

const isUserLogin = false;


const Header = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const {pathname} = useLocation()
  const isRender = pathname === '/login' || pathname === '/registration';

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
    return (
      <header className={s.header}>
        <Logo />
        {!isDesctop && <UserInfo />}
      </header>
    );
  }
};

export default Header;
