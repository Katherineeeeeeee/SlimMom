import { NavLink } from 'react-router-dom';

// import s from './UserInfo.module.scss';

const UserInfo = () => {
  return (
    <div className='wrap'>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </div>
  );
};

export default UserInfo;
