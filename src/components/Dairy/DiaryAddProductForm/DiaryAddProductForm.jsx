import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

import s from './DiaryAddProductForm.module.scss';
import Button from '../../Shared/Button/Button';
import TextField from 'components/Shared/TextField';
import { getProductOperations } from '../../../redux/product-search/search-operations';
import { addWeight } from 'redux/dairy-calendar/dairy-calendar-slice';
import DiaryChooseProductList from '../DiaryChooseProductList/DiaryChooseProductList';
import { ReactComponent as Warning } from 'images/svg/warning.svg';

const DiaryAddProductForm = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: '',
      weight: '',
    },
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(getProductOperations(data.query));
    dispatch(addWeight(Number(data.weight)));
    if (isOpen === true) {
      setIsOpen(false);
      setIsOpen(true);
      reset();
      return;
    }

    setIsOpen(!isOpen);

    reset();
  };

  const handleClickClose = data => {
    setIsOpen(data);
  };

  console.log(isOpen);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.overlayLabel}>
          <Controller
            control={control}
            name="query"
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                placeholder={'Введіть назву продукту'}
                name={'query'}
                control={control}
                handleChange={onChange}
              />
            )}
            rules={{ required: 'Введіть назву продукту' }}
          />

          <ErrorMessage
            errors={errors}
            name="query"
            render={({ message }) => (
              <div className={s.errorOverlay}>
                <Warning />
                <p className={s.errorMessage}>{message}</p>
              </div>
            )}
          />
        </div>

        <div className={s.overlayLabel}>
          <Controller
            control={control}
            name="weight"
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                placeholder={'Вага'}
                name={'weight'}
                control={control}
                handleChange={onChange}
              />
            )}
            rules={{ required: 'Введіть свою вагу' }}
          />
          <ErrorMessage
            errors={errors}
            name="weight"
            render={({ message }) => (
              <div className={s.errorOverlay}>
                <Warning />
                <p className={s.errorMessage}>{message}</p>
              </div>
            )}
          />
        </div>

        <div className={s.btn}>
          {isMobile && <Button text={'Додати'} btnClass={'btn'} />}
          {isTabletDesktop && <Button text={'+'} btnClass={'btnPlus'} />}
        </div>
      </form>
      {isOpen && <DiaryChooseProductList handleClickClose={handleClickClose} />}
    </>
  );
};

export default DiaryAddProductForm;
