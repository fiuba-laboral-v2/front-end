import React, { FunctionComponent } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import NotFound from "./pages/NotFound";
import Configuration from "$config";

const Routes: FunctionComponent = () => (
  <HashRouter basename={Configuration.sub_domain}>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/my-company/">
        <CompanyProfile/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </HashRouter>
);

export default Routes;
