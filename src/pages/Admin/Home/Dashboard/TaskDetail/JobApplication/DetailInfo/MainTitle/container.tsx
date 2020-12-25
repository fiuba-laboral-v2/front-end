import React, { FunctionComponent } from "react";

import { IJobApplication } from "$interfaces/JobApplication";

import { MainTitle } from "../../../../../../components/MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IContainerProps> = ({ jobApplication }) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminJobApplicationMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle hidden={!jobApplication} title={title} updatedAt={jobApplication?.updatedAt} />;
};

export interface IContainerProps {
  jobApplication?: IJobApplication;
}

interface IAdminApplicantMainTitle {
  title: string;
}
