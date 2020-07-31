import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = (
  { company }
) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle title={title} createdAt={company.createdAt}/>;
};

export interface IMainTitleContainerProps {
  company: ICompany<IUser | undefined>;
}

interface IAdminCompanyMainTitle {
  title: string;
}
