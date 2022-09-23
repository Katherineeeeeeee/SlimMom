import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import Burger from './Burger/Burger';

import s from './Navigation.module.scss';

const Navigation = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  if (!isDesctop) {
    return <Burger />;
  }

  return (
    <div className={s.navDesct}>
      <NavLink className={getClassName} to="/dairy">dairy</NavLink>
      <NavLink className={getClassName} to="/calculator-calories">calculator</NavLink>
    </div>
  );
};

export default Navigation;
