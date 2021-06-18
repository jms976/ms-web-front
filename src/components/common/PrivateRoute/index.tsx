import React from "react";
// import Http from "modules/Http";

import { Route, Redirect } from "react-router-dom";

import useUserFatch from "hooks/useUserFatch";
interface PrivateRouteProps {
  component: any;
  exact: any;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isAuth = useUserFatch();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login/fail", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
