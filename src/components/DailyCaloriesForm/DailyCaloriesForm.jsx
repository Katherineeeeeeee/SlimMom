import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
// import { Radio } from 'antd';

import daily from 'redux/daily-rate/daily-rate-selectors';
import { dailyRateInfo } from 'redux/daily-rate/daily-rate-operations';

import TextField from '../Shared/TextField/TextField';
// import RadioField from './radioField';
import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';

import Modal from '../../components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

import s from './DailyCaloriesForm.module.scss';

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  // const [radioResult, setActiveCheckbox] = useState('');
  const [radioResult, setActiveCheckbox] = useState('');

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
    console.log(data);
    e.preventDefault();
    dispatch(dailyRateInfo(data));
    // setActiveCheckbox('');
    setModalOpen(true);
    reset();
  };

  // const getTypeBlood = typeBlood => {
  //   return typeBlood;
  // };
  // getTypeBlood();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h1 className={s.title}>
          Calculate your daily calorie intake right now
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
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.bloodType}
                />
              )}
            />
            {/* <Controller
              control={control}
              name="bloodType"
              render={({ field: { onChange, value } }) => (
                <Radio.Group
                  className={s.radioBlock}
                  value={value}
                  onChange={e => onChange(e.target.value)}
                >
                  <Radio value={1}>1</Radio>
                  <Radio value={2}>2</Radio>
                  <Radio value={3}>3</Radio>
                  <Radio value={4}>4</Radio>
                </Radio.Group>
              )}
            /> */}
            {/* <Controller
              control={control}
              name="bloodType"
              render={({ field: { onChange, value } }) => (
                <RadioField
                  onChange={e => onChange(e.target.value)}
                  getTypeBlood={getTypeBlood}
                  value={value}
                  control={control}
                  // handleChange={onChange}
                  {...field.bloodType}
                />
              )}
            /> */}
            <div className={s.radioBlock}>
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className={s.listRadio}>
                  <label className={s.label}>
                    <input
                      {...register('bloodType', { required: true })}
                      className={s.checkbox}
                      type="radio"
                      name="bloodType"
                      checked={idx === radioResult}
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
      {modalOpen && dailyRateDate && (
        <Modal setModalOpen={setModalOpen} children={<DailyCalorieIntake />} />
      )}
      {modalOpen && errorDaily && (
        <Modal setModalOpen={setModalOpen} children={<ErrorMessage status={errorDaily}/>} />
      )}
    </>
  );
};

export default DailyCaloriesForm;
