import s from '../../components/Register/Register.module.scss';
import Register from 'components/Register';
import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgTablet from '../../images/tablet/bcg.png';

const RegisterPage = () => {
  return (
    <>
      <Register />
      <img className={s.imgTablet} src={bcgTablet} alt="background" />
      <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
    </>
  );
};

export default RegisterPage;
