import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Detail } from "./Detail";


const OfferRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/:id`}>
        <Detail />
      </Route>
    </Switch>
  );
};

export { OfferRoutes };
