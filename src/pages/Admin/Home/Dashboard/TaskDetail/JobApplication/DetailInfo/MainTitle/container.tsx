import React, { FunctionComponent } from "react";

import { IJobApplication } from "$interfaces/JobApplication";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const MainTitleContainer: FunctionComponent<IContainerProps> = ({ jobApplication }) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminJobApplicationMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle
    title={title}
    humanizedTime={<TimeHumanizer since={jobApplication.updatedAt}/>}
  />;
};

export interface IContainerProps {
  jobApplication: IJobApplication;
}

interface IAdminApplicantMainTitle {
  title: string;
}
