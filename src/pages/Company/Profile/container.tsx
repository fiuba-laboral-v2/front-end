import React, { FunctionComponent } from "react";
import { useMyCompanyProfile, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Profile } from "./component";
import { IProfileTranslations } from "./interfaces";

export const ProfileContainer: FunctionComponent = () => {
  const company = useMyCompanyProfile();
  const translations = useTranslations<IProfileTranslations>("editableCompanyProfile");
  return (
    <Profile editLink={RoutesBuilder.company.editMyProfile()} {...{ company, translations }} />
  );
};
