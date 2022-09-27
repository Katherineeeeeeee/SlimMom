import { dailyRateInfo } from '../../redux/daily-rate/daily-rate-operations';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import s from './Home.module.scss';

import DailyCaloriesForm from '../DailyCaloriesForm/DailyCaloriesForm';

import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

const Home = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const dispatch = useDispatch();

  const onGetDailyRate = store => {
    const action = dailyRateInfo(store);
    dispatch(action);
  };

  return (
    <section className={s.home}>
      <DailyCaloriesForm onSubmit={onGetDailyRate} />

      {!isRetina && (
        <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
      )}
      {isRetina && (
        <img className={s.imgDesktop} src={bcgDesktop2x} alt="background" />
      )}
    </section>
  );
};

export default Home;
