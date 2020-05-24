import React, { FunctionComponent } from "react";
import { GET_MY_APPLICANT_PROFILE } from "$queries";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";

import { IApplicant } from "$interfaces/Applicant";

export const ProfileContainer: FunctionComponent = () => {
  const response = useQuery<{}, { getCurrentUser: { applicant: IApplicant } }>(
    GET_MY_APPLICANT_PROFILE,
    { fetchPolicy: "no-cache" }
  );

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <Profile applicant={response.data.getCurrentUser.applicant}/>;
};
