import {
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  USER_AUTHORIZED,
  USER_UNAUTHORIZED,
  SIGNOUT_SUCESS,
  SHOW_ALERT,
  CLEAN_ALERT,
} from "./types";

type ActionType = {
  type: string;
  payload?: any;
};

const authReducer = (state: AuthContextType, action: ActionType) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      if (typeof window !== "undefined")
        localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        authorized: true,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        message: action.payload,
        authorized: false,
        token: "",
      };
    case USER_AUTHORIZED:
      return {
        ...state,
        user: action.payload,
        authorized: true,
      };
    case USER_UNAUTHORIZED:
      return {
        ...state,
        message: action.payload,
        authorized: false,
      };
    case SIGNOUT_SUCESS:
      if (typeof window !== "undefined") localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: "",
        authorized: false,
      };
    case SHOW_ALERT:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAN_ALERT:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;
