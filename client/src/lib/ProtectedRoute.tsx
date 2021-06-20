import React, { useContext } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import AuthContext from "../context/auth/context";

interface ProtectedRouteProps extends Omit<RouteProps, "component"> {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { authorized } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (authorized) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/forbidden",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
