import s from './Login.module.scss';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';
import { useForm, Controller } from 'react-hook-form';

import { login } from 'redux/auth/auth-opetations';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(login(data));
    reset();
    navigate('/dairy');
  };

  return (
    <>
      <h2 className={s.title}>Sign in</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              control={control}
              handleChange={onChange}
              {...field.email}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true, minLength: 8, maxLength: 30 }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              control={control}
              handleChange={onChange}
              {...field.password}
            />
          )}
        />
        <div className={s.wrap}>
          <Button text="Log in" btnClass="btn" />
        </div>
      </form>
    </>
  );
};

export default Login;
