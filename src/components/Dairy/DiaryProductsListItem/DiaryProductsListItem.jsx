// import { useDispatch } from 'react-redux';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import s from './DiaryProductsListItem.module.scss';
import { eatenProducts } from 'redux/day/day-selectors';

const DiaryProductsListItem = () => {
  // const dispatch = useDispatch();

  // function removeProduct(id) {
  //   dispatch(removeProductOperation(id));
  // }

  const eatenProductsList = useSelector(eatenProducts);

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
                // onClick={() => {
                //   removeProduct && removeProduct(id);
                // }}
              ></button>
            </li>
          );
        })}
    </>
  );
};

export default DiaryProductsListItem;
