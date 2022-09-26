const getErrorDaily = state => state.dailyRate.error;
const dailyRate = state => state.dailyRate.dailyRate;
const notAllowedProducts = state => state.dailyRate.notAllowedProducts;

const dailyRateSelectors = {
    getErrorDaily,
    dailyRate,
    notAllowedProducts,
}

export default dailyRateSelectors;