import React, { FunctionComponent } from "react";
import { UserRoute, IGenericUserRoute } from "./UserRoute";

export const AdminRoute: FunctionComponent<IGenericUserRoute> = props =>
  <UserRoute userType="isAdmin" {...props} />;
