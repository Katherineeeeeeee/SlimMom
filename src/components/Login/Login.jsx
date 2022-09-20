import s from './Login.module.scss';
import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

const Login = () => {
  return (
    <Container>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form}>
        <TextField {...field.email} />
        <TextField {...field.password} />
      </form>
      <div className={s.wrap}>
        <Button text="Log in" btnClass="btn" />
        <Button text="Register" btnClass="btnLight" />
      </div>
    </Container>
  );
};

export default Login;
