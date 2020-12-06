import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Profile } from "./component";
import { useMyApplicantProfile, useTranslations } from "$hooks";
import { useHistory } from "react-router-dom";
import { ITranslations } from "./interfaces";
import { Window } from "$components/Window";

export const ProfileContainer: FunctionComponent = () => {
  const applicant = useMyApplicantProfile();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");

  const loading = !applicant || !translations;

  return (
    <Window loading={loading}>
      <Profile
        {...{ applicant, translations }}
        onClickEdit={() => history.push(RoutesBuilder.applicant.editMyProfile())}
      />
    </Window>
  );
};
