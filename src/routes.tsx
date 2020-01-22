import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="*">
      <NotFound/>
    </Route>
  </Switch>
);

export default Routes;
