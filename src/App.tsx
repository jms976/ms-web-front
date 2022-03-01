import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import PrivateRoute from "components/common/PrivateRoute";

import "./App.css";

const Main = lazy(() => import("./pages/Main"));
const Customer = lazy(() => import("./pages/Customer"));
const Program = lazy(() => import("./pages/Program"));
const Spot = lazy(() => import("./pages/Spot"));

const Houses = lazy(() => import("./pages/Houses"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <PrivateRoute exact path={"/main"} component={Main} />
            <PrivateRoute exact path={"/private/customer"} component={Customer} />
            <PrivateRoute exact path={"/private/houses"} component={Houses} />

            <Route exact path={"/record/program"} component={Program} />
            <Route exact path={"/record/spot"} component={Spot} />
            <Route path="*">
              <div>NotFound</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
