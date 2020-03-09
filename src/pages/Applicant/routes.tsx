import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ApplicantHome from "./Home";
import SignUp from "./SignUp";


const ApplicantRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/sign-up`}>
        <SignUp />
      </Route>
      <Route exact path={`${path}/:id`}>
        <ApplicantHome />
      </Route>
    </Switch>
  );
};

export default ApplicantRoutes;
