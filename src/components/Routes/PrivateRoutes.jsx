import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(getLogin);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
