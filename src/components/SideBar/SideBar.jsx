import { useSelector } from 'react-redux';
import {
  getKcalLeft,
  getKcalConsumed,
  getDailyRate,
  getPercentsOfDailyRate,
} from 'redux/day/day-selectors';
import dailyRateSelectors from 'redux/daily-rate/daily-rate-selectors';
import { getDay } from 'redux/dairy-calendar/dairy-calendar-selectors';
import styles from '../SideBar/SideBar.module.scss';
// import { getLogin } from 'redux/auth/auth-selectors';

const SideBar = () => {
  const kcalLeft = useSelector(getKcalLeft);
  const kcalConsumed = useSelector(getKcalConsumed);
  const dailyRate = useSelector(getDailyRate);
  const percentsOfDailyRate = useSelector(getPercentsOfDailyRate);
  const date = useSelector(getDay);
  const notAllowedProducts = useSelector(dailyRateSelectors.notAllowedProducts);

  return (
    <div className={styles.container_sidebar}>
      <div className={styles.sum}>
        <h3 className={styles.title_sidebar}>Summary for {date}</h3>
        <ul className={styles.list_sidebar}>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar_sum}>Left</p>
            <span className={styles.data}>
              {kcalLeft ? Math.floor(kcalLeft) + ' kcal' : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Consumed</p>
            <span className={styles.data}>
              {kcalConsumed ? Math.floor(kcalConsumed) + ' kcal' : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Daily rate</p>
            <span className={styles.data}>
              {dailyRate ? Math.floor(dailyRate) + ' kcal' : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>n% of normal</p>
            <span className={styles.data}>
              {percentsOfDailyRate
                ? Math.floor(percentsOfDailyRate) + ' %'
                : '0 %'}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.food}>
        <h3 className={styles.title_sidebar}>Food not recommended</h3>
        <p className={styles.text_sidebar_food}>
          {notAllowedProducts?.length > 0
            ? notAllowedProducts
            : 'Your diet will be displayed here'}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
