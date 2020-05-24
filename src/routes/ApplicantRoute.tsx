import React, { FunctionComponent } from "react";
import { UserRoute, IGenericUserRoute } from "./UserRoute";

export const ApplicantRoute: FunctionComponent<IGenericUserRoute> = props =>
  <UserRoute userType="applicant" {...props} />;
