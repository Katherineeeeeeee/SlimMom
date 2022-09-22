import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import daily from 'redux/daily-rate/daily-rate-selectors';

import useForm from '../Hooks/useForm';
import TextField from '../Shared/TextField/TextField';
import initialState from './initialState';
import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';

import Modal from '../../components/Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake';

import s from './DailyCaloriesForm.module.scss';
import PropTypes from 'prop-types';

const DailyCaloriesForm = ({ onSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dailyRateDate = useSelector(daily.dailyRate);

  useEffect(() => {
    if (dailyRateDate) {
      setModalOpen(true);
    }
  }, [dailyRateDate]);

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const [radioResult, setActiveCheckbox] = useState('');

  let { height, age, weight, desiredWeight, bloodType } = state;

  const handleClick = () => {
    setActiveCheckbox('');
    if(!dailyRateDate) {return}


    setModalOpen(true);
  };

  if(radioResult === "") {
    bloodType = '';
} else {
    bloodType = radioResult + 1;
}
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <h1 className={s.title}>
          Calculate your daily calorie intake right now
        </h1>
        <div className={s.formParts}>
          <div className={s.formPart}>
            <TextField
              value={height}
              handleChange={handleChange}
              {...field.height}
            />
            <TextField value={age} handleChange={handleChange} {...field.age} />
            <TextField
              value={weight}
              handleChange={handleChange}
              {...field.weight}
            />
          </div>
          <div className={s.formPart}>
            <TextField
              value={desiredWeight}
              handleChange={handleChange}
              {...field.desiredWeight}
            />
            <TextField 
              value={bloodType} 
              handleChange={handleChange} 
              {...field.bloodType} 
            />
            <div className={s.radioBlock}>
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className={s.listRadio}>
                  <label className={s.label}>
                    <input
                      onChange={handleChange}
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
          <Button
            text="Start losing weight"
            type="submit"
            btnClass="btn"
            handleClick={handleClick}
          />
        </div>
      </form>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} children={<DailyCalorieIntake />} />
      )}
    </>
  );
};

export default DailyCaloriesForm;

DailyCaloriesForm.defaultProps = {
  onSubmit: () => {},
};

DailyCaloriesForm.propTypes = {
  onSubmit: PropTypes.func,
};
