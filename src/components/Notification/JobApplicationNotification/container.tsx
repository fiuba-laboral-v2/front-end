import React, { Fragment, FunctionComponent } from "react";
import { useCurrentUser } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ApplicantJobApplicationNotification } from "./ApplicantJobApplicationNotification";
import { CompanyJobApplicationNotification } from "./CompanyJobApplicationNotification";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";

import { IContainerProps } from "./interfaces";

export const JobApplicationNotificationContainer: FunctionComponent<IContainerProps> = props => {
  const response = useCurrentUser();

  if (response.loading) return <LoadingSpinner />;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const currentUser = response.data.getCurrentUser;
  if (currentUser?.company) return <ApplicantJobApplicationNotification {...props} />;
  if (currentUser?.company) return <CompanyJobApplicationNotification {...props} />;
  return <Fragment />;
};
