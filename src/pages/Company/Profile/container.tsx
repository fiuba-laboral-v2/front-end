import React, { FunctionComponent } from "react";
import { useMyCompanyProfile } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";

export const ProfileContainer: FunctionComponent = () => {
  const response = useMyCompanyProfile();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <Profile company={response.data.getCurrentUser.company}/>;
};
