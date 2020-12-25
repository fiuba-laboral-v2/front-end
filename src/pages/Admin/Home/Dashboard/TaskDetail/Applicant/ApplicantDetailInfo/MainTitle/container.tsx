import React, { FunctionComponent } from "react";

import { IApplicant } from "$interfaces/Applicant";

import { MainTitle } from "../../../../../../components/MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({ applicant }) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminApplicantMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle hidden={!applicant} title={title} updatedAt={applicant?.updatedAt} />;
};

export interface IMainTitleContainerProps {
  applicant?: IApplicant;
}

interface IAdminApplicantMainTitle {
  title: string;
}
