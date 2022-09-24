export const getLogin = ({ auth }) => auth.isLogin;
export const getUserName = ({ auth }) => auth.user.username;
export const getSid = ({ auth }) => auth.sid;
export const getAccessToken = ({ auth }) => auth.accessToken;
export const getDayId = ({ auth }) => auth.user.days;
export const getErrorLogin = ({ auth }) => auth.error;
export const getID = ({ auth }) => auth.user.id;
