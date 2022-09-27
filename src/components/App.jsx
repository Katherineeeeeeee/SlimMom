import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import UserRoutes from './Routes/UserRoutes';
import Header from './Header';
import { getSid, getUserIsRefreshing } from 'redux/auth/auth-selectors';
import { refresh } from 'redux/auth/auth-opetations';

import Loader from 'components/Loader';

export const App = () => {
  const userIsRefreshing = useSelector(getUserIsRefreshing);

  const sid = useSelector(getSid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh({ sid }));
    // eslint-disable-next-line
  }, []);

  if (userIsRefreshing) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
};
