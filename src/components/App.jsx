import Container from './Shared/Container';
import UserRoutes from './Routes/UserRoutes';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSid } from 'redux/auth/auth-selectors';

import { refresh } from 'redux/auth/auth-opetations';

export const App = () => {
  const sid = useSelector(getSid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh({ sid }));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Container>
        <UserRoutes />
      </Container>
    </>
  );
};
