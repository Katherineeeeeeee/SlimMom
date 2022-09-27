import { Link, useLocation } from 'react-router-dom';

import s from '../../components/NotFound/NotFound.module.scss';

import Button from 'components/Shared/Button';

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={s.container}>
      <div className={s.booWrapper}>
        <div className={s.boo}>
          <div className={s.face} id="face"></div>
        </div>
        <div className={s.shadow}></div>

        <h1 className={s.title}>Ой!</h1>
        <p className={s.txt}>
          Нам не вдалося знайти сторінку,
          <br />
          яку ви шукали.
        </p>

        <Link to={backLinkHref}>
          <Button text="Повернутися" btnClass="btnLight" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
