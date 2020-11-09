import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";
import { useMyApplicantProfile, useTranslations } from "$hooks";
import { useHistory } from "react-router-dom";
import { ITranslations } from "./interfaces";
import { Window } from "$components/Window";
import { LoadingWindow } from "$components/LoadingWindow";

export const ProfileContainer: FunctionComponent = () => {
  const response = useMyApplicantProfile();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  if (!response.data || !translations) return <LoadingWindow />;

  return (
    <Window>
      <Profile
        applicant={response.data.getCurrentUser.applicant}
        translations={translations}
        onClickEdit={() => history.push(RoutesBuilder.applicant.editMyProfile())}
      />
    </Window>
  );
};
