import { Oval } from 'react-loader-spinner';

import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Oval
        height="150"
        width="150"
        color="#fc842d"
        secondaryColor="transparent"
      />
    </div>
  );
};

export default Loader;
