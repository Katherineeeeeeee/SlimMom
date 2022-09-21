import s from './Login.module.scss';
import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

import useForm from '../../helpers/hooks/useForm';
import initialState from './initialState';

const Login = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;
  console.log(state);

  return (
    <Container>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField {...field.email} value={email} handleChange={handleChange} />
        <TextField
          {...field.password}
          value={password}
          handleChange={handleChange}
        />
        <Button text="Log in" btnClass="btn" />
      </form>
      <div className={s.wrap}>
        <Button text="Register" btnClass="btnLight" />
      </div>
    </Container>
  );
};

export default Login;

Login.defaultProps = {
  onSubmit: () => {},
};
