import React, { FunctionComponent } from "react";
import { Title } from "./Title";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Window } from "$components/Window";
import { Button } from "$components/Button";
import { IProfileParams } from "./interface";

export const Profile: FunctionComponent<IProfileParams> = (
  {
    applicant,
    translations,
    onClickEdit
  }
) => (
  <Window>
    <Title/>
    <ApplicantDetail
      applicant={applicant}
      editButton={
        <Button className={"primary"} onClick={onClickEdit}>{translations.edit}</Button>
      }
      withStatusLabel
    />
  </Window>
);
