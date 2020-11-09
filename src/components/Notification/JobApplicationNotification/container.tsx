import React, { Fragment, FunctionComponent } from "react";
import { useCurrentUser } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ApplicantJobApplicationNotification } from "./ApplicantJobApplicationNotification";
import { CompanyJobApplicationNotification } from "./CompanyJobApplicationNotification";
import { Redirect } from "$components/Redirect";

import { IContainerProps } from "./interfaces";

export const JobApplicationNotificationContainer: FunctionComponent<IContainerProps> = props => {
  const response = useCurrentUser();
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const currentUser = response.data.getCurrentUser;
  if (currentUser?.applicant) return <ApplicantJobApplicationNotification {...props} />;
  if (currentUser?.company) return <CompanyJobApplicationNotification {...props} />;
  return <Fragment />;
};
