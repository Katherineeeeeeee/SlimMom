import Home from 'components/Home';
// import Modal from '../../components/Modal/Modal';
import { dailyRateInfo } from "../../redux/daily-rate/daily-rate-operations"
import  dailyRateSelectors  from "../../redux/daily-rate/daily-rate-selectors"
import { useDispatch, useSelector } from 'react-redux';


const HomePage = () => {
  const dispatch = useDispatch();
  const error = useSelector(dailyRateSelectors.getStateError);

  const onGetDailyRate = store => {
    const action = dailyRateInfo(store);
    dispatch(action)
  };

  return (
    <div>
      <Home onSubmit={onGetDailyRate} />
      {/* <Modal /> */}
    </div>
  );
};

export default HomePage;
