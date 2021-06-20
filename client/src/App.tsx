import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AuthContext from "./context/auth/context";

import ProtectedRoute from "./lib/ProtectedRoute";

import SignIn from "./modules/auth/SignIn";
import SignUp from "./modules/auth/SignUp";
import Dashboard from "./modules/dashboard/Dashboard";
import Forbidden from "./modules/errors/Forbidden";
import Home from "./modules/home/Home";

const App: React.FC = () => {
  const { authUser, authorized } = useContext(AuthContext);
  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forbidden" component={Forbidden} />
      {authorized && (
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      )}
    </Switch>
  );
};

export default App;
