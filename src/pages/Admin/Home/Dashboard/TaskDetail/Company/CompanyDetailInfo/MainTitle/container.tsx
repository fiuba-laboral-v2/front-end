import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps<IUser | undefined>> = (
  { company }
) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const title = translations.loading || translations.error ? "" : translations.data.title;
  return <MainTitle title={title} createdAt={company.createdAt}/>;
};

export interface IMainTitleContainerProps<T extends IUser | undefined> {
  company: ICompany<T>;
}

interface IAdminCompanyMainTitle {
  title: string;
}
