import React, { FunctionComponent } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Applicant from "./pages/Applicant";
import NotFound from "./pages/NotFound";
import Configuration from "$config";

const Routes: FunctionComponent = () => (
  <HashRouter basename={Configuration.sub_domain}>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/companies/:id">
        <Company/>
      </Route>
      <Route exact path="/applicants/:id">
        <Applicant/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </HashRouter>
);

export default Routes;
