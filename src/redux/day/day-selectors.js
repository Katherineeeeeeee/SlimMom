export const day = ({ dayProduct }) => dayProduct.day;
export const daySummary = ({ dayProduct }) => dayProduct.daySummary;
export const eatenProduct = ({ dayProduct }) => dayProduct.eatenProduct;
export const eatenProducts = ({ dayProduct }) => dayProduct.eatenProducts;

export const getKcalLeft = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.kcalLeft;
export const getKcalConsumed = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.kcalConsumed;
export const getDailyRate = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.dailyRate;
export const getPercentsOfDailyRate = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.percentsOfDailyRate;
