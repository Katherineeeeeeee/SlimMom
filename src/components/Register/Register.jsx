import s from './Register.module.scss';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';

import { useForm, Controller } from 'react-hook-form';

import { register } from 'redux/auth/auth-opetations';

import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(register(data));
    reset();
  };

  return (
    <>
      <h2 className={s.title}>Register</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              control={control}
              handleChange={onChange}
              {...field.name}
            />
          )}
        />
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
          <Button text="Register" btnClass="btnLight" />
        </div>
      </form>
    </>
  );
};

export default Register;
