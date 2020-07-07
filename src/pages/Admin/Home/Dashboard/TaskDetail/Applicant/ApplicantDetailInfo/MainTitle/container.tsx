import React, { FunctionComponent } from "react";

import { IApplicant } from "$interfaces/Applicant";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({ applicant }) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const padron = translations.loading || translations.error ? "" : translations.data.padron;
  return <MainTitle title={padron} createdAt={applicant.createdAt}/>;
};

export interface IMainTitleContainerProps {
  applicant: IApplicant;
}

interface IAdminCompanyMainTitle {
  padron: string;
}
