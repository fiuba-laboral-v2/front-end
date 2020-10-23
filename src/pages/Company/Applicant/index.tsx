import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { useApplicantByUuid } from "$hooks";
import { Window } from "$components/Window";
import { ApplicantDetail } from "$components/ApplicantDetail";

export const Applicant: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useApplicantByUuid(uuid);

  return (
    <Window>
      {response.data?.getApplicant ? (
        <ApplicantDetail applicant={response.data.getApplicant} />
      ) : (
        <LoadingSpinner />
      )}
    </Window>
  );
};
