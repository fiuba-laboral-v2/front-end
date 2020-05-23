import React, { FunctionComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { CompanyRoutes } from "$pages/Company/routes";
import ApplicantRoutes from "$pages/Applicant/routes";
import Configuration from "$config";
import { PublicRoutes } from "./pages/Public/routes";

const Routes: FunctionComponent = () => (
  <HashRouter basename={Configuration.sub_domain}>
    <Switch>
      <Route path="/applicants" component={ApplicantRoutes}/>
      <Route path="/companies" component={CompanyRoutes}/>
      <Route component={PublicRoutes}/>
    </Switch>
  </HashRouter>
);

export default Routes;
