const getStateError = state => state.auth.error;
const dailyRate = state => state.dailyRate.dailyRate;

const dailyRateSelectors = {
    getStateError,
    dailyRate,
}

export default dailyRateSelectors;