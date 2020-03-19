import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Profile } from "./Profile";



const CompanyRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/:id`}>
        <Profile />
      </Route>
    </Switch>
  );
};

export { CompanyRoutes };
