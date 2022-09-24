import DailyCaloriesForm from '../DailyCaloriesForm/DailyCaloriesForm';
import { dailyRateInfo } from '../../redux/daily-rate/daily-rate-operations';
import { useDispatch } from 'react-redux';

import bcgDesktop from '../../images/desktop/bcgD.png';

import s from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  const onGetDailyRate = store => {
    const action = dailyRateInfo(store);
    dispatch(action);
  };

  return (
    <section className={s.home}>
      <DailyCaloriesForm onSubmit={onGetDailyRate} />
      <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
    </section>
  );
};

export default Home;
