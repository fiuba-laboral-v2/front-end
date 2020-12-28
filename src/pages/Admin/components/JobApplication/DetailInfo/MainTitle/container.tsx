import React, { FunctionComponent } from "react";

import { IJobApplication } from "$interfaces/JobApplication";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const MainTitleContainer: FunctionComponent<IContainerProps> = ({ jobApplication }) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminJobApplicationMainTitle");
  const title = translations ? translations.title : "";
  return (
    <MainTitle
      hidden={!jobApplication}
      title={title}
      updatedAt={jobApplication?.updatedAt}
      link={jobApplication && RoutesBuilder.admin.jobApplicationDetail(jobApplication.uuid)}
    />
  );
};

export interface IContainerProps {
  jobApplication?: IJobApplication;
}

interface IAdminApplicantMainTitle {
  title: string;
}
