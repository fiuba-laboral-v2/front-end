import React, { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";
import { UserRoute } from "./UserRoute";

export const CompanyRoute: FunctionComponent<RouteProps & { public?: boolean }> = props => {
  return <UserRoute userType="company" {...props} />;
};
