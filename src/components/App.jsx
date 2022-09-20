import Container from './Shared/Container';
import UserRoutes from './Routes/UserRoutes';
import Header from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <UserRoutes />
      </Container>
    </>
  );
};
