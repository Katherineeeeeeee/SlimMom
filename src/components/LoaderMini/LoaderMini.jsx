import { Oval } from 'react-loader-spinner';
import s from './LoaderMini.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Oval
        height="50"
        width="50"
        color="#fc842d"
        secondaryColor="transparent"
      />
    </div>
  );
};

export default Loader;
