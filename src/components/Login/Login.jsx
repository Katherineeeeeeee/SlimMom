import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { login } from 'redux/auth/auth-opetations';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';
import bcgDesktop from '../../images/desktop/bcgD.png';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Modal from '../../components/Modal/Modal';
import { getErrorLogin } from 'redux/auth/auth-selectors';

import s from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const errorLogin = useSelector(getErrorLogin);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(login(data));
    setModalOpen(true);
    reset();
  };

  return (
    <section className={s.login}>
      <Container>
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
        <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
        {modalOpen && errorLogin && (
          <Modal
            setModalOpen={setModalOpen}
            children={<ErrorMessage status={errorLogin} />}
          />
        )}
      </Container>
    </section>
  );
};

export default Login;
