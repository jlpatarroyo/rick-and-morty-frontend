import { createStore } from "redux";
import {
  IS_MAIN_SPINNER,
  IS_MOBILE_DEVICE,
  LOGIN_USER,
  LOGOUT_USER,
} from "./types";

const initialState = {
  authenticated: false,
  isMainSpinner: false,
  isMobileDevice: false,
};

const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case LOGIN_USER:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return { ...state, authenticated: false };
    case IS_MAIN_SPINNER:
      return { ...state, isMainSpinner: value };
    case IS_MOBILE_DEVICE:
      return { ...state, isMobileDevice: value };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
