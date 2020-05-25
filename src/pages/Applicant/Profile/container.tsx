import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";
import { useMyApplicantProfile } from "$hooks";

export const ProfileContainer: FunctionComponent = () => {
  const response = useMyApplicantProfile();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <Profile applicant={response.data.getCurrentUser.applicant}/>;
};
