import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import styles from '../SideBar/SideBar.module.scss';

import TextFieldDefault from 'components/Shared/TextFieldDefault/TextFieldDefault';
import { field } from '../Shared/TextField/fields';

import {
  getKcalLeft,
  getKcalConsumed,
  getDailyRate,
  getPercentsOfDailyRate,
  getKcalLeft2,
  getKcalConsumed2,
  getDailyRate2,
  getPercentsOfDailyRate2,
} from 'redux/day/day-selectors';
import { getNotAllowedProducts } from 'redux/auth/auth-selectors';
import { getInfoByDay } from 'redux/day/day-operations';
import { getDay } from 'redux/dairy-calendar/dairy-calendar-selectors';

const SideBar = () => {
  const date = useSelector(getDay);
  const notAllowedProducts = useSelector(getNotAllowedProducts);

  const kcalLeft = useSelector(getKcalLeft);
  const kcalConsumed = useSelector(getKcalConsumed);
  const dailyRate = useSelector(getDailyRate);
  const percentsOfDailyRate = useSelector(getPercentsOfDailyRate);

  const kcalLeft2 = useSelector(getKcalLeft2);
  const kcalConsumed2 = useSelector(getKcalConsumed2);
  const dailyRate2 = useSelector(getDailyRate2);
  const percentsOfDailyRate2 = useSelector(getPercentsOfDailyRate2);

  const dispatch = useDispatch();

  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    if (date) {
      dispatch(getInfoByDay({ date }));
    }
  }, [dispatch, date, notAllowedProducts]);

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
              {kcalLeft
                ? Math.floor(kcalLeft) + ' kcal'
                : kcalLeft2
                ? Math.floor(kcalLeft2) + ' kcal'
                : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Спожилося</p>
            <span className={styles.data}>
              {kcalConsumed
                ? Math.floor(kcalConsumed) + ' kcal'
                : kcalConsumed2
                ? Math.floor(kcalConsumed2) + ' kcal'
                : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Добова норма</p>
            <span className={styles.data}>
              {dailyRate
                ? Math.floor(dailyRate) + ' kcal'
                : dailyRate2
                ? Math.floor(dailyRate2) + ' kcal'
                : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>% від норми</p>
            <span className={styles.data}>
              {percentsOfDailyRate
                ? Math.floor(percentsOfDailyRate) + ' %'
                : percentsOfDailyRate2
                ? Math.floor(percentsOfDailyRate2) + ' %'
                : '0 %'}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.food}>
        <h3 className={styles.title_sidebar}>Не рекомендована їжа</h3>
        {notAllowedProducts?.length > 0 && (
          <TextFieldDefault
            handleChange={filterRecommendedFood}
            {...field.filter}
          />
        )}
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
            Тут відображатиметься ваш раціон.
          </p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
