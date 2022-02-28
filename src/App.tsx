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
const BotTemplate = lazy(() => import("./pages/BotTemplate"));
const ScenarioTemplate = lazy(() => import("./pages/ScenarioTemplate"));
const BlockTemplate = lazy(() => import("./pages/BlockTemplaate"));
const Notice = lazy(() => import("./pages/Notice"));
const QnA = lazy(() => import("./pages/QnA"));
const FAQ = lazy(() => import("./pages/FAQ"));
const LoginSuccess = lazy(() => import("./pages/Login/Success"));
const LoginFail = lazy(() => import("./pages/Login/Fail"));

const Houses = lazy(() => import("./pages/Houses"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading..</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <PrivateRoute exact path={"/main"} component={Main} />
            <PrivateRoute exact path={"/customer"} component={Customer} />

            <PrivateRoute exact path={"/plugin/bot"} component={BotTemplate} />
            <PrivateRoute
              exact
              path={"/plugin/scenario"}
              component={ScenarioTemplate}
            />
            <PrivateRoute
              exact
              path={"/plugin/block"}
              component={BlockTemplate}
            />
            <PrivateRoute exact path={"/manage/notice"} component={Notice} />
            <PrivateRoute exact path={"/manage/qna"} component={QnA} />
            <PrivateRoute exact path={"/manage/faq"} component={FAQ} />
            <Route exact path={"/login/success"} component={LoginSuccess} />
            <Route exact path={"/login/fail"} component={LoginFail} />
            <Route exact path={"/noAuth"} component={Customer} />
            <Route exact path={"/houses"} component={Houses} />
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
