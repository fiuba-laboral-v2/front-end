import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Profile } from "./component";
import { useMyApplicantProfile, useTranslations } from "$hooks";
import { useHistory } from "react-router-dom";
import { ITranslations } from "./interface";

export const ProfileContainer: FunctionComponent = () => {
  const response = useMyApplicantProfile();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.loading) return <LoadingSpinner/>;

  return <Profile
    applicant={response.data.getCurrentUser.applicant}
    translations={translations.data}
    onClickEdit={() => history.push(RoutesBuilder.applicant.editMyProfile())}
  />;
};
