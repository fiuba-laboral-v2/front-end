import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = (
  { company }
) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const title = translations.loading || translations.error ? "" : translations.data.title;
  return <MainTitle title={title} createdAt={company.createdAt}/>;
};

export interface IMainTitleContainerProps {
  company: ICompany;
}

interface IAdminCompanyMainTitle {
  title: string;
}
