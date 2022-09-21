import { NavLink } from 'react-router-dom';

// import s from './UserInfo.module.scss';

const isUserLogin = 0;

const UserInfo = () => {
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
        <p>Exit</p>
      </div>
    );
  }
};

export default UserInfo;
