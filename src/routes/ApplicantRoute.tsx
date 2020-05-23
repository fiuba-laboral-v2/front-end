import { RoutesBuilder } from "../models/RoutesBuilder";
import React, { Fragment, FunctionComponent } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useCurrentUser } from "../models/hooks/queries";
import { Redirect } from "../components/Redirect";

const {
  login,
  internalServerError,
  forbidden
} = RoutesBuilder.public;

export const ApplicantRoute: FunctionComponent<RouteProps & { public?: boolean }> = props => {
  const currentUser = useCurrentUser();

  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={internalServerError}/>;

  const user = currentUser.data.getCurrentUser;

  if (props.public) return <Route {...props}/>;
  if (!user) return <Redirect to={login}/>;
  if (!user.applicant) return <Redirect to={forbidden}/>;

  return <Route {...props}/>;
};
