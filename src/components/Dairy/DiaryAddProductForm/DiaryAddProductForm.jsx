import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

import s from './DiaryAddProductForm.module.scss';
import Button from '../../Shared/Button/Button';
import TextField from 'components/Shared/TextField';
import { getProductOperations } from '../../../redux/product-search/search-operations';
import { addWeight } from 'redux/dairy-calendar/dairy-calendar-slice';

const DiaryAddProductForm = () => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      query: '',
      weight: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(getProductOperations(data.query));
    dispatch(addWeight(Number(data.weight)));
    reset();
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="query"
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              placeholder={'Enter product name'}
              name={'query'}
              control={control}
              handleChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="weight"
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              placeholder={'Grams'}
              name={'weight'}
              control={control}
              handleChange={onChange}
            />
          )}
        />

        <div className={s.btn}>
          {isMobile && <Button text={'Add'} btnClass={'btn'} />}
          {isTabletDesktop && <Button text={'+'} btnClass={'btnPlus'} />}
        </div>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
