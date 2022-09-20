// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';

import styles from './DiaryAddProductForm.module.scss';
import Button from '../../Shared/Button/Button';

const DiaryAddProductForm = () => {
  // const dispatch = useDispatch();

  // const { register, handleSubmit, reset } = useForm({
  //   defaultValues: {
  //     name: '',
  //     number: '',
  //   },
  // });

  return (
    <>
      <form action="">
        <label htmlFor="">
          <input
            type="text"
            placeholder="Enter product name"
            className={styles.field}
          />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Grams" className={styles.field} />
        </label>
        <Button text={'Add'} />
      </form>
    </>
  );
};

export default DiaryAddProductForm;
