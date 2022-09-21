import s from './Login.module.scss';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

import { login } from 'redux/auth/auth-opetations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const userData = {
      email: elements.email.value,
      password: elements.password.value,
    };
    dispatch(login(userData));
    e.target.reset();
  };

  return (
    <>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField {...field.email} />
        <TextField {...field.password} />
        <div className={s.wrap}>
          <Button text="Log in" btnClass="btn" />
        </div>
      </form>
    </>
  );
};

export default Login;
