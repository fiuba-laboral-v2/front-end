import React, { FunctionComponent } from "react";

import { IJobApplication } from "$interfaces/JobApplication";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent<IContainerProps> = ({ jobApplication }) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminJobApplicationMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle title={title} createdAt={jobApplication.updatedAt} />;
};

export interface IContainerProps {
  jobApplication: IJobApplication;
}

interface IAdminApplicantMainTitle {
  title: string;
}
