import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getLogin, getUserName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-opetations';

import s from './UserInfo.module.scss';
import { clearData } from 'redux/dairy-calendar/dairy-calendar-slice';
import { clearDay } from 'redux/day/day-slice';

const UserInfo = () => {
  const isUserLogin = useSelector(getLogin);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearData());
    dispatch(clearDay());
  };

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  if (!isUserLogin) {
    return (
      <div>
        <NavLink className={getClassName} to="/login">
          Вхід
        </NavLink>
        <NavLink className={getClassName} to="/registration">
          Реєстрація
        </NavLink>
      </div>
    );
  }

  if (isUserLogin) {
    return (
      <div className={s.userInfoSide}>
        <p>{userName}</p>
        <Link to="/" className={s.link} onClick={onLogout}>
          Вихід
        </Link>
      </div>
    );
  }
};

export default UserInfo;
