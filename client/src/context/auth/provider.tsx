import React, { useReducer } from "react";
import AuthContext, { initialState } from "./context";
import { baseAPI } from "../../config/axios";
import authReducer from "./reducers";
import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCESS,
  USER_AUTHORIZED,
  USER_UNAUTHORIZED,
} from "./types";

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  /**
   * Auth action for log in the user and get the auth token
   *
   * METHOD: POST
   *
   * @param {*} user
   */
  const signInUser = async (user: User) => {
    try {
      const response = await baseAPI.post("/signin", user);

      // passing the token to the state
      if (typeof response.data.token !== "undefined") {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: response.data.token,
        });
      } else {
        dispatch({
          type: SIGNIN_ERROR,
          payload: "Usuario no encontrado o contraseña incorrecta",
        });
      }
    } catch (error) {
      dispatch({
        type: SIGNIN_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  /**
   * Auth action for check if the user is authenticated through the token
   */
  const authUser = async () => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token")!;

    if (!token) {
      dispatch({
        type: USER_UNAUTHORIZED,
        payload: "Sesión acabada",
      });
    }

    try {
      const response = await baseAPI.post("/auth", {
        token: token,
      });
      if (response.status === 403) {
        dispatch({
          type: USER_UNAUTHORIZED,
          payload: "Sesión acabada",
        });
      }

      dispatch({
        type: USER_AUTHORIZED,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SIGNIN_ERROR,
        payload: "Ha ocurrido un error",
      });
    }
  };

  const signOutUser = () => {
    dispatch({
      type: SIGNOUT_SUCESS,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        authorized: state.authorized,
        signInUser,
        signOutUser,
        authUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
