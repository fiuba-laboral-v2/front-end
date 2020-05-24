import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { GET_MY_APPLICANT_PROFILE } from "$queries";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";

import { sortBy } from "lodash";
import { IApplicant } from "$interfaces/Applicant";

export const ProfileContainer: FunctionComponent = () => {
  const history = useHistory();

  const response = useQuery<{}, { getCurrentUser: { applicant: IApplicant } }>(
    GET_MY_APPLICANT_PROFILE,
    {
      fetchPolicy: "no-cache",
      errorHandlers: {
        UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden),
        AuthenticationError: () => history.push(RoutesBuilder.public.login)
      }
    }
  );

  if (response.error) return <Redirect to={RoutesBuilder.public.forbidden}/>;
  if (response.loading) return <LoadingSpinner/>;

  const applicant = response.data.getCurrentUser.applicant;
  applicant.links = applicant.links || [];
  applicant.sections = sortBy(applicant.sections, ["displayOrder"]);

  return <Profile applicant={applicant}/>;
};
