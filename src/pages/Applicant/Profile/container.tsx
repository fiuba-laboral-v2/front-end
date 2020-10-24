import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";
import { useMyApplicantProfile, useTranslations } from "$hooks";
import { useHistory } from "react-router-dom";
import { ITranslations } from "./interface";
import { Window } from "$components/Window";

export const ProfileContainer: FunctionComponent = () => {
  const response = useMyApplicantProfile();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return (
    <Window>
      {response.data && translations ? (
        <Profile
          applicant={response.data.getCurrentUser.applicant}
          translations={translations}
          onClickEdit={() => history.push(RoutesBuilder.applicant.editMyProfile())}
        />
      ) : (
        <LoadingSpinner />
      )}
    </Window>
  );
};
