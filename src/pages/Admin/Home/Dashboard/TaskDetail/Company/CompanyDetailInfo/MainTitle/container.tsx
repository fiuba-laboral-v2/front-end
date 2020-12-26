import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

import { MainTitle } from "../../../../../../components/MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({ company }) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const title = translations ? translations.title : "";
  return (
    <MainTitle hidden={!company || !translations} title={title} updatedAt={company?.updatedAt} />
  );
};

export interface IMainTitleContainerProps {
  company?: ICompany<IUser | undefined>;
}

interface IAdminCompanyMainTitle {
  title: string;
}
