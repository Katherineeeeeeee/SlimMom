// import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import styles from './DiaryAddProductForm.module.scss';
import Button from '../../Shared/Button/Button';
import TextField from 'components/Shared/TextField';

const DiaryAddProductForm = () => {
  // const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      query: '',
      weight: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    // dispatch();
    reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder={'Enter product name'}
          name={'query'}
          {...register('query', { required: true })}
        />
        <TextField
          placeholder={'Grams'}
          name={'weight'}
          {...register('weight', { required: true })}
        />
        <div className={styles.btn}>
          <Button text={'Add'} btnClass={'btn'} />
        </div>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
