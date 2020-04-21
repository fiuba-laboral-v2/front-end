import React, { FunctionComponent } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "$pages/Home";
import { CompanyRoutes } from "$pages/Company/routes";
import { LogIn } from "$pages/LogIn";
import ApplicantRoutes from "$pages/Applicant/routes";
import NotFound from "./pages/NotFound";
import { InternalServerError } from "./pages/InternalServerError";
import Configuration from "$config";

const Routes: FunctionComponent = () => (
  <HashRouter basename={Configuration.sub_domain}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route path="/companies">
        <CompanyRoutes />
      </Route>
      <Route path="/applicants">
        <ApplicantRoutes />
      </Route>
      <Route path="/error">
        <InternalServerError />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </HashRouter>
);

export default Routes;
