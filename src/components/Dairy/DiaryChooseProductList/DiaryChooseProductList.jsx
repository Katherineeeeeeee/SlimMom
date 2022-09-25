import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import s from './DiaryChooseProductList.module.scss';

import { postEatenProduct } from 'redux/day/day-operations';

import { getProduct } from 'redux/product-search/search-selectors';
import { getSearchLoading } from 'redux/product-search/search-selectors';

import LoaderMini from 'components/LoaderMini';

export default function DiaryChooseProductList({ handleClickClose }) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);
  const searchProduct = useSelector(getProduct);
  const dairyCalendar = useSelector(({ dairyCalendar }) => dairyCalendar);
  const searchLoading = useSelector(getSearchLoading);

  const handleClick = productId => {
    dispatch(postEatenProduct({ ...dairyCalendar, productId }));
    setIsOpen(!isOpen);
    handleClickClose(false);
  };

  return (
    <>
      {searchLoading === true ? (
        <LoaderMini />
      ) : (
        <>
          {isOpen && (
            <div className={s.overlay}>
              <h2 className={s.headTitle}>Виберіть продукт:</h2>
              <ul className={s.list}>
                {searchProduct.map(({ _id, title, calories, weight }) => (
                  <li
                    key={_id}
                    className={s.item}
                    onClick={() => handleClick(_id)}
                  >
                    <p className={s.title}> {title.ua}</p>
                    <div className={s.wrapper}>
                      <p className={s.weight}>{weight} гр</p>
                      <p className={s.kcal}>{calories} ккал</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}
