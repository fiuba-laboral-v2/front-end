import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useMyCompanyProfile, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Profile } from "./component";
import { IProfileTranslations } from "./interfaces";

export const ProfileContainer: FunctionComponent = () => {
  const history = useHistory();
  const company = useMyCompanyProfile();
  const translations = useTranslations<IProfileTranslations>("editableCompanyProfile");

  return (
    <Profile
      onClickEdit={() => history.push(RoutesBuilder.company.editMyProfile())}
      {...{ company, translations }}
    />
  );
};
