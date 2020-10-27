import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useApplicantByUuid } from "$hooks";
import { Window } from "$components/Window";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { LoadingWindow } from "$components/LoadingWindow";

export const Applicant: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useApplicantByUuid(uuid);

  if (!response.data?.getApplicant) return <LoadingWindow />;

  return (
    <Window>
      <ApplicantDetail applicant={response.data.getApplicant} />
    </Window>
  );
};
