import React, { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";
import { CustomRoute } from "./CustomRoute";

export const CompanyRoute: FunctionComponent<RouteProps & { public?: boolean }> = props => {
  return <CustomRoute userType="company" {...props} />;
};
