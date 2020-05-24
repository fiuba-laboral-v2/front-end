import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Window } from "$components/Window";
import { IApplicant } from "$interfaces/Applicant";

export const Profile: FunctionComponent<IProfile> = ({ applicant }) => (
  <Window>
    <Title/>
    <ApplicantDetail applicant={applicant}/>
  </Window>
);

interface IProfile {
  applicant: IApplicant;
}
