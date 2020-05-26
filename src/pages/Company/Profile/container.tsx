import React, { FunctionComponent } from "react";
import { GET_MY_COMPANY_PROFILE } from "$queries";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";

import { ICompany } from "$interfaces/Company";

export const ProfileContainer: FunctionComponent = () => {
  const response = useQuery<{}, { getCurrentUser: { company: ICompany } }>(GET_MY_COMPANY_PROFILE);

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <Profile company={response.data.getCurrentUser.company}/>;
};
