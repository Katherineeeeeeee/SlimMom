export const day = ({ dayProduct }) => dayProduct.day;
export const daySummary = ({ dayProduct }) => dayProduct.daySummary;
export const eatenProduct = ({ dayProduct }) => dayProduct.eatenProduct;
export const eatenProducts = ({ dayProduct }) => dayProduct.eatenProducts;
export const getEatenProductsLoading = ({ dayProduct }) => dayProduct.loading;

export const getKcalLeft = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.kcalLeft;
export const getKcalConsumed = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.kcalConsumed;
export const getDailyRate = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.dailyRate;
export const getPercentsOfDailyRate = ({ dayProduct }) =>
  dayProduct?.aboutDay?.daySummary?.percentsOfDailyRate;

export const getKcalLeft2 = ({ dayProduct }) => dayProduct?.aboutDay?.kcalLeft;
export const getKcalConsumed2 = ({ dayProduct }) =>
  dayProduct?.aboutDay?.kcalConsumed;
export const getDailyRate2 = ({ dayProduct }) =>
  dayProduct?.aboutDay?.dailyRate;
export const getPercentsOfDailyRate2 = ({ dayProduct }) =>
  dayProduct?.aboutDay?.percentsOfDailyRate;

export const getDayLoading = ({ dayProduct }) => dayProduct.loading;
