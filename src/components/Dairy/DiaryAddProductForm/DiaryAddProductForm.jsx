// import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import styles from './DiaryAddProductForm.module.scss';
import Button from '../../Shared/Button/Button';
import TextField from 'components/Shared/TextField';

const DiaryAddProductForm = () => {
  // const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      query: '',
      weight: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    // dispatch();
    console.log(data);
    reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

        <div className={styles.btn}>
          <Button text={'Add'} btnClass={'btn'} />
        </div>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
