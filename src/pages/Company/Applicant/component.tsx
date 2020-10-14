import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Window } from "$components/Window";
import { IApplicant } from "$interfaces/Applicant";

export const Applicant: FunctionComponent<IApplicantProps> = ({ applicant }) => (
  <Window>
    <ApplicantDetail applicant={applicant} />
  </Window>
);

interface IApplicantProps {
  applicant: IApplicant;
}
