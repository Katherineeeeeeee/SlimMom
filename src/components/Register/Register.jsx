import s from './Register.module.scss';
import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

import useForm from '../../helpers/hooks/useForm';
import initialState from './initialState';

const Register = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;
  console.log(state);

  return (
    <Container>
      <h2 className={s.title}>Register</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField {...field.name} value={name} handleChange={handleChange} />
        <TextField {...field.email} value={email} handleChange={handleChange} />
        <TextField
          {...field.password}
          value={password}
          handleChange={handleChange}
        />
      </form>
      <div className={s.wrap}>
        <Button text="Log in" btnClass="btn" />
        <Button text="Register" btnClass="btnLight" />
      </div>
    </Container>
  );
};

export default Register;

Register.defaultProps = {
  onSubmit: () => {},
};
