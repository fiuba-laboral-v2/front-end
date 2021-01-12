import React, { FunctionComponent } from "react";

import { IApplicant } from "$interfaces/Applicant";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { IUseRejectionMessage } from "../../../RejectionMessageButton/interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({
  useRejectionMessage,
  applicant
}) => {
  const translations = useTranslations<IAdminApplicantMainTitle>("adminApplicantMainTitle");
  const title = translations ? translations.title : "";
  const isRejected = applicant?.approvalStatus === ApprovalStatus.rejected;
  return (
    <MainTitle
      adminTaskUuid={applicant?.uuid}
      {...(isRejected && { useRejectionMessage })}
      hidden={!applicant}
      title={title}
      updatedAt={applicant?.updatedAt}
    />
  );
};

export interface IMainTitleContainerProps {
  applicant?: IApplicant;
  useRejectionMessage: IUseRejectionMessage;
}

interface IAdminApplicantMainTitle {
  title: string;
}
