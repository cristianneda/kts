import { LOGIN_USER } from "../actions/login-action";

const initialState = {
  login: false,
  username: null,
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      let login = action.loginInfo.login;
      let username = action.loginInfo.username;
      return {
        ...state,
        login,
        username,
      };

    default:
      return state;
  }
};

export default loginReducers;
