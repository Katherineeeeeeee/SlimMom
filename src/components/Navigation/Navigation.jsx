import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import Burger from './Burger/Burger';

import s from './Navigation.module.scss';

const Navigation = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });

  if (!isDesctop) {
    return <Burger />;
  }

  return (
    <div className={s.navDesct}>
      <Link to="/dairy">dairy</Link>
      <Link to="/calculator-calories">calculator</Link>
    </div>
  );
};

export default Navigation;
