import React, { Fragment, FunctionComponent } from "react";
import { Route, RouteProps, Switch, useRouteMatch } from "react-router-dom";
import { SignUp } from "./SignUp";
import Profile from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { List } from "./List";
import { Home } from "./Home";
import { OfferDetail } from "./OfferDetail";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCurrentUser } from "$hooks";

const ApplicantRoute: FunctionComponent<RouteProps> = props => {
  const currentUser = useCurrentUser();
  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={RoutesBuilder.internalServerError}/>;
  if (!currentUser.data.getCurrentUser) return <Redirect to={RoutesBuilder.login}/>;
  if (!currentUser.data.getCurrentUser.applicant) return <Redirect to={RoutesBuilder.forbidden}/>;
  return <Route {...props}/>;
};

const ApplicantRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <ApplicantRoute exact path={`${path}/`}>
        <Home/>
      </ApplicantRoute>
      <ApplicantRoute exact path={`${path}/list`}>
        <List/>
      </ApplicantRoute>
      <ApplicantRoute exact path={`${path}/sign-up`}>
        <SignUp/>
      </ApplicantRoute>
      <ApplicantRoute exact path={`${path}/:id`}>
        <Profile/>
      </ApplicantRoute>
      <ApplicantRoute exact path="/applicants/:id/edit">
        <EditableProfile/>
      </ApplicantRoute>
      <ApplicantRoute exact path="/applicants/offers/:id">
        <OfferDetail/>
      </ApplicantRoute>
    </Switch>
  );
};

export default ApplicantRoutes;
