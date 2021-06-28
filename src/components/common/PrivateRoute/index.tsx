import React, {useState, useEffect} from "react";
import Http from "modules/Http";

import { Route, Redirect } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import {
  setIsAuth,
  setAuthUser,
} from "features/commonSlice/commonSlice";

interface PrivateRouteProps {
  component: any;
  exact: any;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const dispatch = useAppDispatch();

  const [isAuthenticated, setAuthenticated] = useState(false);

  const fetch = () => {
    return new Promise((resolve, reject) => {
      Http.get(
        `${process.env.REACT_APP_API_HOST}/auth/user`
      ).then((res) => {
        if (res && res.data) {
          dispatch(setIsAuth(true));
          if (res.data.status === "success") {
            dispatch(setAuthUser(res.data.data));
          }
        }
        return resolve(true);
      }).catch((err) => {
        console.log("Not properly authenticated");
        dispatch(setIsAuth(false));
        dispatch(setAuthUser(null));
        return reject(false);
      });
    })
  }

  useEffect(() => {
    const fetchUser = async () => {
      const result = await fetch() as boolean;
      setAuthenticated(result)
    }
    fetchUser();
    return () => setAuthenticated(false);
  }, []);

  return (
    isAuthenticated ? 
    <Route
      {...rest}
      render={(props) => <Component {...rest} {...props} />}
    />:
    <></>
  );
};

export default PrivateRoute;
