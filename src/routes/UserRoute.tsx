import { RoutesBuilder } from "../models/RoutesBuilder";
import React, { Fragment, FunctionComponent } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useCurrentUser } from "$hooks";
import { Redirect } from "$components/Redirect";

const { login, internalServerError, forbidden } = RoutesBuilder.public;

export const UserRoute: FunctionComponent<IUserRoute> = props => {
  const currentUserResponse = useCurrentUser();

  if (props.public) return <Route {...props} />;

  if (currentUserResponse.loading) return <Fragment />;
  if (currentUserResponse.error) return <Redirect to={internalServerError()} />;

  const currentUser = currentUserResponse.data.getCurrentUser;

  if (!currentUser) return <Redirect to={login()} />;
  if (!currentUser[props.userType]) return <Redirect to={forbidden()} />;

  return <Route {...props} />;
};

export interface IGenericUserRoute extends RouteProps {
  public?: boolean;
}

export interface IUserRoute extends IGenericUserRoute {
  userType: "applicant" | "company" | "admin";
}
