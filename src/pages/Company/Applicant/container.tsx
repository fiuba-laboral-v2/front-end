import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { GET_APPLICANT } from "$queries";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Applicant } from "./component";
import { IApplicant } from "$interfaces/Applicant";

export const ApplicantContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();

  const response = useQuery<{}, { getApplicant: IApplicant }>(
    GET_APPLICANT,
    { variables: { uuid } }
  );

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <Applicant applicant={response.data.getApplicant}/>;
};
