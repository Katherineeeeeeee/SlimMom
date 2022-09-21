const getStateError = state => state.dailyRate.error;
const dailyRate = state => state.dailyRate.dailyRate;

const dailyRateSelectors = {
    getStateError,
    dailyRate,
}

export default dailyRateSelectors;