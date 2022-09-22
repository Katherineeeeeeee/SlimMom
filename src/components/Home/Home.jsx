import DailyCaloriesForm from '../DailyCaloriesForm/DailyCaloriesForm';
import { dailyRateInfo } from '../../redux/daily-rate/daily-rate-operations';
// import dailyRateSelectors from '../../redux/daily-rate/daily-rate-selectors';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const onGetDailyRate = store => {
    const action = dailyRateInfo(store);
    dispatch(action);
  };

  return <DailyCaloriesForm onSubmit={onGetDailyRate} />;
};

export default Home;

