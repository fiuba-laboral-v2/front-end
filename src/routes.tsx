import React, { FunctionComponent } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import Home from "$pages/Home";
import { CompanyRoutes } from "$pages/Company/routes";
import ApplicantRoutes from "$pages/Applicant/routes";
import { OfferRoutes } from "$pages/Offer/routes";
import NotFound from "./pages/NotFound";
import Configuration from "$config";

const Routes: FunctionComponent = () => (
  <HashRouter basename={Configuration.sub_domain}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/companies">
        <CompanyRoutes />
      </Route>
      <Route path="/applicants">
        <ApplicantRoutes />
      </Route>
      <Route path="/offers">
        <OfferRoutes />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </HashRouter>
);

export default Routes;
