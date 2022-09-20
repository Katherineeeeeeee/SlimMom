import s from './Register.module.scss';
import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

const Register = () => {
  return (
    <Container>
      <h2 className={s.title}>Register</h2>
      <form className={s.form}>
        <TextField {...field.name} />
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

export default Register;
