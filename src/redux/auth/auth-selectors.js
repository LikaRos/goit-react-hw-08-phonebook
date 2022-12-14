export const getToken = state => state.auth.token;
export const getIsLogin = state => state.auth.isLogin;
export const getUserName = state => state.auth.user.name;

const authSelectors = {
  getToken,
  getIsLogin,
  getUserName,
};
export default authSelectors;
