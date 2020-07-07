import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";

import { MainTitle } from "./component";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = (
  { company }
) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const title = translations.loading || translations.error ? "" : translations.data.title;
  return <MainTitle company={company} title={title}/>;
};

export interface IMainTitleContainerProps {
  company: ICompany;
}

interface IAdminCompanyMainTitle {
  title: string;
}
