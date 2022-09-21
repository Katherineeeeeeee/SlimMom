import React from 'react';

import useForm from './useForm';
import TextField from '../Shared/TextField/TextField';
import initialState from './initialState';
import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';

import s from './Home.module.scss';
import style from '../Shared/TextField/TextField.module.scss';
import PropTypes from 'prop-types';

const HomeForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const [bloodType, setActiveCheckbox] = React.useState('');

  const { height, age, currentWeight, desiredWeight } = state;
  console.log(state);
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h1 className={s.title}>Calculate your daily calorie intake right now</h1>
      <div className={s.formParts}>
        <div>
          <TextField value={height} onChange={handleChange} {...field.height} />
          <TextField value={age} onChange={handleChange} {...field.age} />
          <TextField
            value={currentWeight}
            onChange={handleChange}
            {...field.currentWeight}
          />
        </div>
        <div>
          <TextField
            value={desiredWeight}
            onChange={handleChange}
            {...field.desiredWeight}
          />
          <input placeholder="Blood type" className={style.input}></input>
          <div className={s.radioBlock}>
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className={s.listRadio}>
                <label className={s.label}>
                  <input
                    onChange={handleChange}
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

export default HomeForm;

HomeForm.defaultProps = {
  onSubmit: () => {},
};

HomeForm.propTypes = {
  onSubmit: PropTypes.func,
};
