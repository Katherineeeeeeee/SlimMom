// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';

import styles from './DiaryAddProductForm.module.scss';
import Button from '../../Shared/Button/Button';
import TextField from 'components/Shared/TextField';

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
      <form action="" className={styles.form}>
        <TextField placeholder={'Enter product name'} />
        <TextField placeholder={'Grams'} />
        <div className={styles.btn}>
          <Button text={'Add'} btnClass={'btn'} />
        </div>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
