import { useDispatch, useSelector } from 'react-redux';
import {
  getKcalLeft,
  getKcalConsumed,
  getDailyRate,
  getPercentsOfDailyRate,
} from 'redux/day/day-selectors';
import { useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import TextField from 'components/Shared/TextField';
import { field } from '../Shared/TextField/fields';

import { getDay } from 'redux/dairy-calendar/dairy-calendar-selectors';
import styles from '../SideBar/SideBar.module.scss';

import { getNotAllowedProducts } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { getInfoByDay } from 'redux/day/day-operations';

const SideBar = () => {
  const kcalLeft = useSelector(getKcalLeft);
  const kcalConsumed = useSelector(getKcalConsumed);
  const dailyRate = useSelector(getDailyRate);
  const percentsOfDailyRate = useSelector(getPercentsOfDailyRate);
  const date = useSelector(getDay);
  const notAllowedProducts = useSelector(getNotAllowedProducts);

  const dispatch = useDispatch();

  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    if (date) {
      dispatch(getInfoByDay({ date }));
    }
  }, [dispatch, date]);

  useEffect(() => {
    if (!notAllowedProducts) {
      return;
    }
    setFilteredFood(notAllowedProducts);
  }, [notAllowedProducts]);

  const filterRecommendedFood = e => {
    const filteredProducts = notAllowedProducts.filter(el =>
      el.includes(e.target.value)
    );

    setFilteredFood(filteredProducts);
  };

  return (
    <div className={styles.container_sidebar}>
      <div className={styles.sum}>
        <h3 className={styles.title_sidebar}>Резюме за {date}</h3>
        <ul className={styles.list_sidebar}>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar_sum}>Залишилося</p>
            <span className={styles.data}>
              {kcalLeft ? Math.floor(kcalLeft) + ' kcal' : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Спожилося</p>
            <span className={styles.data}>
              {kcalConsumed ? Math.floor(kcalConsumed) + ' kcal' : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Добова норма</p>
            <span className={styles.data}>
              {dailyRate ? Math.floor(dailyRate) + ' kcal' : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>% від норми</p>
            <span className={styles.data}>
              {percentsOfDailyRate
                ? Math.floor(percentsOfDailyRate) + ' %'
                : '0 %'}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.food}>
        <h3 className={styles.title_sidebar}>Не рекомендована їжа</h3>
        <TextField handleChange={filterRecommendedFood} {...field.filter} />
        {notAllowedProducts?.length > 0 && (
          <>
            <ol className={styles.menuGroupList}>
              {filteredFood.map(el => (
                <li key={nanoid()} className={styles.menuGroupItems}>
                  {el}
                </li>
              ))}
            </ol>
          </>
        )}
        {notAllowedProducts?.length === 0 && (
          <p className={styles.text_sidebar_food}>
            Тут відображатиметься ваш раціон. Для цього заповніть форму в
            калькуляторі.
          </p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
