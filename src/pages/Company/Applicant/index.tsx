import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useApplicantByUuid } from "$hooks";
import { Window } from "$components/Window";
import { ApplicantDetail } from "$components/ApplicantDetail";

export const Applicant: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useApplicantByUuid(uuid);

  return (
    <Window loading={response.loading}>
      <ApplicantDetail applicant={response.data?.getApplicant} />
    </Window>
  );
};
