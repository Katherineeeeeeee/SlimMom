import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import s from './DailyCaloriesForm.module.scss';

import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';
import TextField from '../Shared/TextField/TextField';
import Modal from '../../components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Container from 'components/Shared/Container';
import TextFieldDefault from 'components/Shared/TextFieldDefault/TextFieldDefault';

import daily from 'redux/daily-rate/daily-rate-selectors';
import { dailyRateInfo } from 'redux/daily-rate/daily-rate-operations';

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const [bloodType, setActiveCheckbox] = useState('');

  const dailyRateDate = useSelector(daily.dailyRate);
  const errorDaily = useSelector(daily.getErrorDaily);

  const { control, handleSubmit, reset, register } = useForm({
    defaultValues: {
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    },
  });

  const onSubmit = (data, e) => {
    const numberData = {
      weight: Number(data.weight),
      height: Number(data.height),
      age: Number(data.age),
      desiredWeight: Number(data.desiredWeight),
      bloodType: Number(data.bloodType),
    };
    e.preventDefault();

    dispatch(dailyRateInfo(numberData));
    setActiveCheckbox('');
    document.querySelector('body').classList.add('no-scroll');
    setModalOpen(true);
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h1 className={s.title}>
          Розрахуйте свою денну норму калорій прямо зараз
        </h1>
        <div className={s.formParts}>
          <div className={s.formPart}>
            <Controller
              control={control}
              name="height"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.height}
                />
              )}
            />
            <Controller
              control={control}
              name="age"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.age}
                />
              )}
            />
            <Controller
              control={control}
              name="weight"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.weight}
                />
              )}
            />
          </div>
          <div className={s.formPart}>
            <Controller
              control={control}
              name="desiredWeight"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.desiredWeight}
                />
              )}
            />
            <Controller
              control={control}
              name="bloodType"
              render={({ field: { onChange, value } }) => (
                <TextFieldDefault
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.bloodType}
                />
              )}
            />
            <div className={s.radioBlock}>
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className={s.listRadio}>
                  <label className={s.label}>
                    <input
                      {...register('bloodType', { required: true })}
                      className={s.checkbox}
                      type="radio"
                      name="bloodType"
                      checked={idx === bloodType}
                      onClick={() => setActiveCheckbox(idx)}
                      value={idx + 1}
                      placeholder="Blood type"
                    />
                    <span className={s.fake}></span>
                    <span className={s.text}>{idx + 1}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={s.buttonPosition}>
          <Button text="Схуднути" type="submit" btnClass="btn" />
        </div>
      </form>
      {modalOpen && dailyRateDate && (
        <Modal setModalOpen={setModalOpen} children={<DailyCalorieIntake />} />
      )}
      {modalOpen && errorDaily && (
        <Modal
          setModalOpen={setModalOpen}
          children={<ErrorMessage status={errorDaily} />}
        />
      )}
    </Container>
  );
};

export default DailyCaloriesForm;

DailyCaloriesForm.defaultProps = {
  onSubmit: () => {},
  dailyRateDate: () => {},
  errorDaily: () => {},
  onChange: () => {},
  data: {},
};

DailyCaloriesForm.propTypes = {
  onSubmit: PropTypes.func,
  dailyRateDate: PropTypes.func,
  errorDaily: PropTypes.func,
  onChange: PropTypes.func,
  data: PropTypes.shape({
    weight: PropTypes.string,
    height: PropTypes.string,
    age: PropTypes.string,
    desiredWeight: PropTypes.string,
    bloodType: PropTypes.string,
  }),
};
