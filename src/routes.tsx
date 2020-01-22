import React, { FunctionComponent } from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import configuration from "$config";

const Routes: FunctionComponent = () => (
  <BrowserRouter basename={configuration.sub_domain}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
