import useForm from '../Hooks/useForm';
import TextField from '../Shared/TextField/TextField';
import initialState from './initialState';
import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';

import Modal from '../../components/Modal/Modal';

import s from './Home.module.scss';
import style from '../Shared/TextField/TextField.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Home = ({ onSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const [bloodType, setActiveCheckbox] = useState('');

  const { height, age, weight, desiredWeight } = state;

  const handleClick = () => {
    setModalOpen(true);
  };

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
          <Button
            text="Start losing weight"
            type="submit"
            btnClass="btn"
            handleClick={handleClick}
          />
        </div>
      </form>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Home;

Home.defaultProps = {
  onSubmit: () => {},
};

Home.propTypes = {
  onSubmit: PropTypes.func,
};
