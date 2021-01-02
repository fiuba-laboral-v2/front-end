import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Actions } from "./Actions";
import { IProfileParams } from "./interfaces";

export const Profile: FunctionComponent<IProfileParams> = ({ applicant }) => (
  <>
    <Title />
    <ApplicantDetail applicant={applicant} withStatusLabel>
      <Actions />
    </ApplicantDetail>
  </>
);
