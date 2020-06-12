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

export const UserRoute: FunctionComponent<IUserRoute> = props => {
  const currentUser = useCurrentUser();

  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={internalServerError()}/>;

  const user = currentUser.data.getCurrentUser;

  if (props.public) return <Route {...props}/>;
  if (!user) return <Redirect to={login()}/>;
  if (!user[props.userType]) return <Redirect to={forbidden()}/>;

  return <Route {...props}/>;
};

export interface IGenericUserRoute extends RouteProps {
  public?: boolean;
}

export interface IUserRoute extends IGenericUserRoute {
  userType: "applicant" | "company" | "admin";
}
