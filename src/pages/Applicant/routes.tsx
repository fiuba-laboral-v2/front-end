import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SignUp } from "./SignUp";
import Profile from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { List } from "./List";
import { Home } from "./Home";
import { OfferDetail } from "./OfferDetail";

const ApplicantRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <Home />
      </Route>
      <Route exact path={`${path}/list`}>
        <List />
      </Route>
      <Route exact path={`${path}/sign-up`}>
        <SignUp />
      </Route>
      <Route exact path={`${path}/:id`}>
        <Profile />
      </Route>
      <Route exact path="/applicants/:id/edit">
        <EditableProfile />
      </Route>
      <Route exact path="/applicants/offers/:id">
        <OfferDetail />
      </Route>
    </Switch>
  );
};

export default ApplicantRoutes;
