import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { getProduct } from 'redux/product-search/search-selectors';
import s from './DiaryChooseProductList.module.scss';
import { postEatenProduct } from 'redux/day/day-operations';

export default function DiaryChooseProductList() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);
  const searchProduct = useSelector(getProduct);
  const dairyCalendar = useSelector(({ dairyCalendar }) => dairyCalendar);

  const handleClick = productId => {
    dispatch(postEatenProduct({ ...dairyCalendar, productId }));
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className={s.overlay}>
          <h2 className={s.headTitle}>Choose a product:</h2>
          <ul className={s.list}>
            {searchProduct.map(({ _id, title, calories, weight }) => (
              <li key={_id} className={s.item} onClick={() => handleClick(_id)}>
                <p className={s.title}> {title.ua}</p>
                <div className={s.wrapper}>
                  <p className={s.weight}>{weight} gr</p>
                  <p className={s.kcal}>{calories} kcal</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
