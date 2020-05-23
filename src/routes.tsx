import React, { Fragment, FunctionComponent } from "react";
import { HashRouter, Route, RouteProps, Switch } from "react-router-dom";
import Configuration from "$config";
import { PublicRoutes } from "./pages/Public/routes";
import { Redirect } from "./components/Redirect";
import { RoutesBuilder } from "./models/RoutesBuilder";
import { useCurrentUser } from "./models/hooks/queries";
import { CompanyRoutes } from "./pages/Company/routes";
import { ApplicantRoutes } from "./pages/Applicant/routes";

const {
  login,
  internalServerError,
  notFound,
  forbidden
} = RoutesBuilder.public;

const ApplicantRoute: FunctionComponent<RouteProps & { public?: boolean }> = props => {
  const currentUser = useCurrentUser();

  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={internalServerError}/>;

  const user = currentUser.data.getCurrentUser;

  if (props.public) return <Route {...props}/>;
  if (!user) return <Redirect to={login}/>;
  if (!user.applicant) return <Redirect to={forbidden}/>;

  return <Route {...props}/>;
};

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
