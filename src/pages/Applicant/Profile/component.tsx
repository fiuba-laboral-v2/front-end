import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Button } from "$components/Button";
import { IProfileParams } from "./interfaces";

export const Profile: FunctionComponent<IProfileParams> = ({
  applicant,
  translations,
  onClickEdit
}) => (
  <>
    <Title />
    <ApplicantDetail
      applicant={applicant}
      editButton={
        <Button kind="primary" onClick={onClickEdit}>
          {translations?.edit}
        </Button>
      }
      withStatusLabel
    />
  </>
);
