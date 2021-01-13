import React, { FunctionComponent } from "react";

import { IJobApplication } from "$interfaces/JobApplication";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IUseRejectionMessage } from "../../../RejectionMessageButton/interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const MainTitleContainer: FunctionComponent<IContainerProps> = ({
  useRejectionMessage,
  jobApplication
}) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminJobApplicationMainTitle");
  const title = translations ? translations.title : "";
  const isRejected = jobApplication?.approvalStatus === ApprovalStatus.rejected;
  return (
    <MainTitle
      adminTaskUuid={jobApplication?.uuid}
      {...(isRejected && { useRejectionMessage })}
      hidden={!jobApplication}
      title={title}
      updatedAt={jobApplication?.updatedAt}
      link={jobApplication && RoutesBuilder.admin.jobApplicationDetail(jobApplication.uuid)}
    />
  );
};

export interface IContainerProps {
  useRejectionMessage: IUseRejectionMessage;
  jobApplication?: IJobApplication;
}

interface IAdminApplicantMainTitle {
  title: string;
}
