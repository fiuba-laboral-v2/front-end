import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignUp from "./SignUp";
import Profile from "./Profile";
import EditableDetail from "./EditProfile";



const ApplicantRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/sign-up`}>
        <SignUp />
      </Route>
      <Route exact path={`${path}/:id`}>
        <Profile />
      </Route>
      <Route exact path="/applicants/:id/edit">
        <EditableDetail />
      </Route>
    </Switch>
  );
};

export default ApplicantRoutes;
