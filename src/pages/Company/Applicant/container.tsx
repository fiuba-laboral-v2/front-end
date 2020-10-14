import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Applicant } from "./component";
import { useApplicantByUuid } from "$hooks";

export const ApplicantContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useApplicantByUuid(uuid);

  if (response.error || response.loading) return <LoadingSpinner />;

  return <Applicant applicant={response.data.getApplicant} />;
};
