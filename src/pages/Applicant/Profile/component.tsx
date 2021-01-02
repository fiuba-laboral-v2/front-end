import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Button } from "$components/Button";
import { IProfileParams } from "./interfaces";

export const Profile: FunctionComponent<IProfileParams> = ({
  applicant,
  translations,
  editLink
}) => (
  <>
    <Title />
    <ApplicantDetail applicant={applicant} withStatusLabel>
      <Button kind="primary" link={editLink}>
        {translations?.edit}
      </Button>
    </ApplicantDetail>
  </>
);
