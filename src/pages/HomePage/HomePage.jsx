import s from '../../components/Home/Home.module.scss';
import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgTablet from '../../images/tablet/bcgCalcTablet.png';

import Home from 'components/Home';

const HomePage = () => {
  return (
    <>
      <Home />
      <img className={s.imgTablet} src={bcgTablet} alt="background" />
      <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
    </>
  );
};

export default HomePage;
