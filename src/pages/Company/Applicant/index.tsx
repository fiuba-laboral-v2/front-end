import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useApplicantByUuid } from "$hooks";
import { Window } from "$components/Window";
import { ApplicantDetail } from "$components/ApplicantDetail";

export const Applicant: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const applicant = useApplicantByUuid(uuid);

  return (
    <Window loading={!applicant}>
      <ApplicantDetail applicant={applicant} />
    </Window>
  );
};
