export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (loginInfo) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_USER,
        loginInfo,
      });
    } catch (error) {}
  };
};
