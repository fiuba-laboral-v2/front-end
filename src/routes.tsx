import React, { FunctionComponent } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Configuration from "$config";

const Routes: FunctionComponent = () => (
  <BrowserRouter basename={Configuration.sub_domain}>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
