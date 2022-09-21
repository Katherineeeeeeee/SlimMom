import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getLogin } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-opetations';

const UserInfo = () => {
const isUserLogin = useSelector(getLogin);
const dispatch = useDispatch();

const onLogout = () => {
  dispatch(logout());
}

  if (!isUserLogin) {
    return (
      <div className="wrap">
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    );
  }

  if (isUserLogin) {
    return (
      <div className="wrap">
        <p>Nic</p>
        <p onClick={onLogout}>Exit</p>
      </div>
    );
  }
};

export default UserInfo;
