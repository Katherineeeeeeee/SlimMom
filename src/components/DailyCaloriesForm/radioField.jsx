import PropTypes from 'prop-types';
import s from './DailyCaloriesForm.module.scss';

import { useState } from 'react';

export default function RadioField({ name, getTypeBlood }) {
  const [radioResult, setActiveCheckbox] = useState('');
  const [typeBlood, setTypeBlood] = useState(null);

  getTypeBlood(typeBlood);

  return (
    <>
      <div className={s.radioBlock}>
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className={s.listRadio}>
            <label className={s.label}>
              <input
                className={s.checkbox}
                type="radio"
                name={name}
                checked={idx === radioResult}
                onClick={() => setActiveCheckbox(idx)}
                onChange={e => setTypeBlood(e.target.value)}
                value={idx + 1}
                placeholder="Blood type"
              />
              <span className={s.fake}></span>
              <span className={s.text}>{idx + 1}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

RadioField.defaultProps = {
  getTypeBlood: () => {},
  name: '',
}

RadioField.propTypes = {
  getTypeBlood: PropTypes.func,
  name: PropTypes.string,
}