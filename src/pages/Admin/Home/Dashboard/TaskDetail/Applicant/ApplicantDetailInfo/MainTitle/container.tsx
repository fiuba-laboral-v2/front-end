import React, { FunctionComponent } from "react";

import { IApplicant } from "$interfaces/Applicant";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({ applicant }) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminApplicantMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle title={title} createdAt={applicant.createdAt}/>;
};

export interface IMainTitleContainerProps {
  applicant: IApplicant;
}

interface IAdminCompanyMainTitle {
  title: string;
}
