const getStateError = state => state.auth.error;
const dailyRate = state => state.dailyRate.dailyRate;
const notAllowedProducts = state => state.dailyRate.notAllowedProducts;

const dailyRateSelectors = {
    getStateError,
    dailyRate,
    notAllowedProducts,
}

export default dailyRateSelectors;