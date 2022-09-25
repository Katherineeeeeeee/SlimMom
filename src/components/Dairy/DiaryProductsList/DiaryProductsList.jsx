import { useSelector } from 'react-redux';

import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import LoaderMini from 'components/LoaderMini';

import s from './DiaryProductsList.module.scss';

import { getEatenProductsLoading } from 'redux/day/day-selectors';

const DiaryProductsList = () => {
  const eatenProductsLoading = useSelector(getEatenProductsLoading);

  // if (eatenProductsLoading === true) {
  //   return <LoaderMini />;
  // }
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
