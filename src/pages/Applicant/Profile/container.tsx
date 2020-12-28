import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Profile } from "./component";
import { useMyApplicantProfile, useTranslations } from "$hooks";
import { ITranslations } from "./interfaces";
import { Window } from "$components/Window";

export const ProfileContainer: FunctionComponent = () => {
  const applicant = useMyApplicantProfile();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  const loading = !applicant || !translations;

  return (
    <Window loading={loading}>
      <Profile
        applicant={applicant}
        translations={translations}
        editLink={RoutesBuilder.applicant.editMyProfile()}
      />
    </Window>
  );
};
