import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { getProduct } from 'redux/product-search/search-selectors';
import s from './DiaryChooseProductList.module.scss';

export default function DiaryChooseProductList({ getIdProduct }) {
  const [idProduct, setIdProduct] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    getIdProduct(idProduct);
  }, [idProduct]);

  const searchProduct = useSelector(getProduct);

  const handleClick = ({ currentTarget }) => {
    setIdProduct(currentTarget.dataset.id);
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
