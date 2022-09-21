import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import TextField from '../Shared/TextField/TextField';
import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';
import { dailyRateUser } from 'redux/daily-rate/daily-rate-operations';

import s from './CalcForm.module.scss';
import style from '../Shared/TextField/TextField.module.scss';

const CalcForm = () => {
  const [bloodType, setActiveCheckbox] = useState('');

  const id = useSelector(state => state.auth.user.id);

  const dispatch = useDispatch();

  const { control, register, handleSubmit, reset } = useForm({
    defaultValues: {
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();

    dispatch(dailyRateUser({ id, ...data }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h1 className={s.title}>Calculate your daily calorie intake right now</h1>
      <div className={s.formParts}>
        <div className={s.formPart}>
          <Controller
            control={control}
            name="height"
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                name={'height'}
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
                name={'age'}
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
                name={'weight'}
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
                name={'desiredWeight'}
                control={control}
                handleChange={onChange}
                {...field.desiredWeight}
              />
            )}
          />
          <input placeholder="Blood type" className={style.input}></input>
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
        <Button text="Start losing weight" type="submit" btnClass="btn" />
      </div>
    </form>
  );
};

export default CalcForm;
