import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignUp from "./SignUp";
import Deatil from "./Detail";
import EditableDeatil from "./Edit";



const ApplicantRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/sign-up`}>
        <SignUp />
      </Route>
      <Route exact path={`${path}/:id`}>
        <Deatil />
      </Route>
      <Route exact path="/applicants/:id/edit">
        <EditableDeatil />
      </Route>
    </Switch>
  );
};

export default ApplicantRoutes;
