import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { getProduct } from 'redux/product-search/search-selectors';
import s from './DiaryChooseProductList.module.scss';
import { postEatenProduct } from 'redux/day/day-operations';

export default function DiaryChooseProductList({ getIdProduct, day }) {
  const dispatch = useDispatch();

  // const [idProduct, setIdProduct] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const searchProduct = useSelector(getProduct);

  // useEffect(() => {
  //   getIdProduct(idProduct);
  // }, [idProduct]);

  const dayFull = day;
  console.log(dayFull);

  const handleClick = ({ currentTarget }) => {
    // setIdProduct(currentTarget.dataset.id);
    dispatch(
      postEatenProduct({ ...dayFull, productId: currentTarget.dataset.id })
    );
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className={s.overlay}>
          <ul className={s.list}>
            {searchProduct.map(({ _id, title, calories, weight }) => (
              <li
                key={_id}
                data-id={_id}
                className={s.item}
                onClick={handleClick}
              >
                <p className={s.title}> {title.ua}</p>
                <div className={s.wrapper}>
                  <p>{calories} kcal</p>
                  <p>{weight} gr</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
