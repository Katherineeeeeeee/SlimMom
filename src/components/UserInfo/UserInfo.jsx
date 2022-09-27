import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import s from './UserInfo.module.scss';

import { getLogin, getUserName } from 'redux/auth/auth-selectors';
import { clearData } from 'redux/dairy-calendar/dairy-calendar-slice';
import { clearDay } from 'redux/day/day-slice';
import { logout } from 'redux/auth/auth-opetations';

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
        <p onClick={onLogout}>Вихід</p>
      </div>
    );
  }
};

export default UserInfo;
