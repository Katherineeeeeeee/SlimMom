import { useDispatch, useSelector } from 'react-redux';

import s from './DiaryProductsListItem.module.scss';
import { eatenProducts } from 'redux/day/day-selectors';
import { deleteEatenProduct } from 'redux/day/day-operations';

const DiaryProductsListItem = () => {
  const dispatch = useDispatch();

  const eatenProductsList = useSelector(eatenProducts);

  const removeProduct = id => {
    dispatch(deleteEatenProduct(id));
  };

  return (
    <>
      {eatenProductsList &&
        eatenProductsList.map(({ id, title, weight, kcal }) => {
          return (
            <li key={id} className={s.item}>
              <p className={s.title}>{title}</p>
              <div className={s.wrapper}>
                <p>{weight} gr</p>
                <p>{Math.round(kcal)} kcal</p>
              </div>
              <button
                className="btnRemove"
                type="button"
                onClick={() => removeProduct(id)}
              ></button>
            </li>
          );
        })}
    </>
  );
};

export default DiaryProductsListItem;
