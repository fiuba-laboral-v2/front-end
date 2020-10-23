import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useMyCompanyProfile, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Redirect } from "$components/Redirect";
import { Profile } from "./component";
import { IProfileTranslations } from "./interface";

export const ProfileContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useMyCompanyProfile();
  const translations = useTranslations<IProfileTranslations>("editableCompanyProfile");

  if (response.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  return (
    <Profile
      onClickEdit={() => history.push(RoutesBuilder.company.editMyProfile())}
      translations={translations}
      company={response.data?.getCurrentUser?.company}
    />
  );
};
