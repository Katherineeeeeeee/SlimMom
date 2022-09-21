import s from './Register.module.scss';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

import { register } from 'redux/auth/auth-opetations';

import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const userData = {
      username: elements.name.value,
      email: elements.email.value,
      password: elements.password.value,
    };

    dispatch(register(userData));
    e.target.reset();
  };

  return (
    <>
      <h2 className={s.title}>Register</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField {...field.name} />
        <TextField {...field.email} />
        <TextField {...field.password} />
        <div className={s.wrap}>
          <Button text="Register" btnClass="btnLight" />
        </div>
      </form>
    </>
  );
};

export default Register;
