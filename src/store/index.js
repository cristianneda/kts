import { configureStore } from "@reduxjs/toolkit";

import loginReducers from "./reducers/login-reducer";
const rootReducer = {
  reducer: { login: loginReducers },
};

const store = configureStore(rootReducer);

export default store;
