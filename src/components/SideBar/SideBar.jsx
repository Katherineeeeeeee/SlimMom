import { useSelector } from 'react-redux';
import dailyRateSelectors from 'redux/daily-rate/daily-rate-selectors';
import styles from '../SideBar/SideBar.module.scss';

const SideBar = () => {
  const notAllowedProducts = useSelector(dailyRateSelectors.notAllowedProducts);
  return (
    <div className={styles.container_sidebar}>
      <div className={styles.sum}>
        <h3 className={styles.title_sidebar}>Summary for 06/20/2020</h3>
        <ul className={styles.list_sidebar}>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar_sum}>Left</p>
            <span className={styles.data}>000 kcal</span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Consumed</p>
            <span className={styles.data}>000 kcal</span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Daily rate</p>
            <span className={styles.data}>000 kcal</span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>n% of normal</p>
            <span className={styles.data}>000 kcal</span>
          </li>
        </ul>
      </div>
      <div className={styles.food}>
        <h3 className={styles.title_sidebar}>Food not recommended</h3>
        <p className={styles.text_sidebar_food}>
          Your diet will be displayed here
        </p>
      </div>
    </div>
  );
};

export default SideBar;
