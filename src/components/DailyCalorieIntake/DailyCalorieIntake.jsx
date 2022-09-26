import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import daily from 'redux/daily-rate/daily-rate-selectors';
import Button from 'components/Shared/Button';
import { items } from './items';

import PropTypes from 'prop-types';
import s from './DailyCalorieIntake.module.scss';

const DailyCalorieIntake = () => {
  const notAllowedProducts = useSelector(daily.notAllowedProducts);
  const dailyRate = Math.round(useSelector(daily.dailyRate));

  let itemsList = [];
  if (notAllowedProducts.length === 0) {
    itemsList = items;
  } else {
    for(let i = 0; i < 5; i += 1) {
      itemsList[i] = notAllowedProducts[i];
    }
  }

  return (
    <>
      <h2 className={s.modalTitle}>
        Ваша рекомендована добова норма споживання калорій становить:
      </h2>
      <p className={s.modalText}>
        {dailyRate}
        <span className={s.textDescription}> ккал</span>
      </p>
      <div className={s.menuGroup}>
        {itemsList.length > 0 && (
          <>
            <p className={s.menuGroupTitle}>
              Продукти, які ви не повинні їсти:
            </p>
            <ul className={s.menuGroupList}>
              {itemsList.map(el => (
                <li key={nanoid()} className={s.menuGroupItems}>
                  {el}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to="/registration">
        <Button text="Схуднути" type="button" btnClass="btn" />
      </Link>
    </>
  );
};

export default DailyCalorieIntake;

DailyCalorieIntake.defaultProps = {
  notAllowedProducts: () => {},
  dailyRate: () => {},
}

DailyCalorieIntake.propTypes = {
  notAllowedProducts: PropTypes.func,
  dailyRate: PropTypes.func,
}
