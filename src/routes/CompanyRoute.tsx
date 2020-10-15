import React, { FunctionComponent } from "react";
import { UserRoute, IGenericUserRoute } from "./UserRoute";

export const CompanyRoute: FunctionComponent<IGenericUserRoute> = props => (
  <UserRoute userType="company" {...props} />
);
