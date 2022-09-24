import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { register } from 'redux/auth/auth-opetations';
import { useDispatch, useSelector } from 'react-redux';

import { field } from 'components/Shared/TextField/fields';
import TextField from 'components/Shared/TextField';
import Button from 'components/Shared/Button';
import Container from 'components/Shared/Container';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Modal from '../../components/Modal/Modal';
import { getLogin, getErrorLogin } from 'redux/auth/auth-selectors';

import { useMediaQuery } from 'react-responsive';
import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

import s from './Register.module.scss';

const Register = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const isLogin = useSelector(getLogin);
  const errorLogin = useSelector(getErrorLogin);

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
    setModalOpen(true);
    reset();
    if (isLogin) {
      navigate('/login');
    }
  };

  return (
    <section className={s.register}>
      <Container>
        <h2 className={s.title}>Register</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="username"
            rules={{ required: true, maxLength: 16 }}
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
        {!isRetina && (
          <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
        )}
        {isRetina && (
          <img className={s.imgDesktop} src={bcgDesktop2x} alt="background" />
        )}
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

export default Register;
