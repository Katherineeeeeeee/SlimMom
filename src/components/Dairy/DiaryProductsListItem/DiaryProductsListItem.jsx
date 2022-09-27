import { useDispatch, useSelector } from 'react-redux';

import s from './DiaryProductsListItem.module.scss';

import { ReactComponent as Bin } from '../../../images/svg/removeBtn.svg';

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
                <p className={s.weight}>{weight} гр</p>
                <p className={s.kcal}>{Math.round(kcal)} ккал</p>
              </div>
              <button
                className={s.btnRemove}
                type="button"
                onClick={() => removeProduct(id)}
              >
                <Bin />
              </button>
            </li>
          );
        })}
    </>
  );
};

export default DiaryProductsListItem;
