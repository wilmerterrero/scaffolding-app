import { createContext } from "react";

export const initialState: AuthContextType = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
  authorized: false,
  user: null,
  signInUser: (_user: User) => {},
  signOutUser: () => {},
  authUser: (_user?: any) => {},
};

const AuthContext = createContext(initialState);

export default AuthContext;
