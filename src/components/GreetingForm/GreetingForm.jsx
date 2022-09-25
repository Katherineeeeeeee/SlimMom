import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';

import s from './GreetingForm.module.scss';

export default function GreetingForm() {
  const userName = useSelector(getUserName);
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Добрий день, {userName}</h1>
      <p className={s.text}>
        Наш додаток пропонує вам дотримуватися дієти та розрахувати калорії.
        Перейдіть до розділу калькулятор та розрахуйте дієту.
      </p>
      <div className={s.btn}>
        <Link to="/calculator-calories" className={s.btnGreeting}>
          Розрахувати дієту
        </Link>
      </div>
    </div>
  );
}
