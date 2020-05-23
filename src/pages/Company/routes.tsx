import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Profile } from "./Profile";
import { List } from "./List";
import { SignUp } from "./SignUp";
import { CreateOffer } from "./CreateOffer";
import { MyJobApplications } from "./MyJobApplications";

const CompanyRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <List />
      </Route>
      <Route exact path={`${path}/registro`}>
        <SignUp />
      </Route>
      <Route exact path={`${path}/oferta/crear`}>
        <CreateOffer />
      </Route>
      <Route exact path={`${path}/postulaciones`}>
        <MyJobApplications />
      </Route>
      <Route exact path={`${path}/:id`}>
        <Profile />
      </Route>
    </Switch>
  );
};

export { CompanyRoutes };
