// import { useDispatch } from 'react-redux';

import styles from './DiaryProductsListItem.module.scss';

const DiaryProductsListItem = () => {
  // const dispatch = useDispatch();

  // function removeProduct(id) {
  //   dispatch(removeProductOperation(id));
  // }

  return (
    <>
      {/* {eatenProducts.map(({ id, title, weight, kcal }) => {
      return (
      <li key={id}>
        <p>{title}</p>
        <p>{weight}</p>
        <p>{kcal}</p>
        <button
          className="btnRemove"
          type="button"
          onClick={() => {
            removeProduct && removeProduct(id);
          }}
        ></button>
      </li>
      );
      })} */}
      <li className={styles.item}>
        <p className={styles.textTitle}>Eggplant</p>
        <p className={styles.textWeight}>100 g</p>
        <p className={styles.textKcal}>320 kcal</p>
        <button className="btnRemove"></button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
