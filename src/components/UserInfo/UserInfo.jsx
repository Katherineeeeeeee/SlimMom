import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getLogin, getUserName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-opetations';

import s from './UserInfo.module.scss';

const UserInfo = () => {
  const isUserLogin = useSelector(getLogin);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  if (!isUserLogin) {
    return (
      <div>
        <NavLink className={getClassName} to="/login">
          Sign in
        </NavLink>
        <NavLink className={getClassName} to="/registration">
          Registration
        </NavLink>
      </div>
    );
  }

  if (isUserLogin) {
    return (
      <div className={s.userInfoSide}>
        <p>{userName}</p>
        <p onClick={onLogout}>Exit</p>
      </div>
    );
  }
};

export default UserInfo;
