import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.scss';

const DiaryProductsList = () => {
  return (
    <ul className={styles.list}>
      <DiaryProductsListItem />
    </ul>
  );
};

export default DiaryProductsList;
