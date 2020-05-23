import React, { FunctionComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Configuration from "$config";
import { PublicRoutes } from "../pages/Public/routes";
import { Redirect } from "../components/Redirect";
import { RoutesBuilder } from "../models/RoutesBuilder";
import { CompanyRoutes } from "../pages/Company/routes";
import { ApplicantRoutes } from "../pages/Applicant/routes";
import { ApplicantRoute } from "./ApplicantRoute";

const { notFound } = RoutesBuilder.public;

const Routes: FunctionComponent = () => (
  <HashRouter basename={Configuration.sub_domain}>
    <Switch>
      {ApplicantRoutes.map(props => <ApplicantRoute exact key={props.path} {...props}/>)}
      {CompanyRoutes.map(props => <Route exact key={props.path} {...props}/>)}
      {PublicRoutes.map(props => <Route exact key={props.path} {...props}/>)}
      <Redirect to={notFound}/>
    </Switch>
  </HashRouter>
);

export default Routes;
