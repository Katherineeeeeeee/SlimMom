import Home from 'components/Home';
import { dailyRateInfo } from '../../redux/daily-rate/daily-rate-operations';
// import dailyRateSelectors from '../../redux/daily-rate/daily-rate-selectors';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  const onGetDailyRate = store => {
    const action = dailyRateInfo(store);
    dispatch(action);
  };

  return <Home onSubmit={onGetDailyRate} />;
};

export default HomePage;
