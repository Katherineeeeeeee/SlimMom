import { useSelector } from 'react-redux';

import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import LoaderMini from 'components/LoaderMini';

import s from './DiaryProductsList.module.scss';

import { getEatenProductsLoading } from 'redux/day/day-selectors';
import { getSearchLoading } from 'redux/product-search/search-selectors';

const DiaryProductsList = () => {
  const eatenProductsLoading = useSelector(getEatenProductsLoading);
  const searchLoading = useSelector(getSearchLoading);

  if (searchLoading === true) {
    return <></>;
  }

  return (
    <>
      {/* <LoaderMini /> */}
      {eatenProductsLoading === true ? (
        <LoaderMini />
      ) : (
        <div className={s.overlay}>
          <ul className={s.list}>
            <DiaryProductsListItem />

            <li></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DiaryProductsList;
