import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";
import { IUseRejectionMessage } from "../../../RejectionMessageButton/interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({
  useRejectionMessage,
  company
}) => {
  const translations = useTranslations<IAdminCompanyMainTitle>("adminCompanyMainTitle");
  const title = translations ? translations.title : "";
  const isRejected = company?.approvalStatus === ApprovalStatus.rejected;
  return (
    <MainTitle
      {...(isRejected && { useRejectionMessage })}
      hidden={!company || !translations}
      title={title}
      updatedAt={company?.updatedAt}
    />
  );
};

export interface IMainTitleContainerProps {
  company?: ICompany<IUser | undefined>;
  useRejectionMessage: IUseRejectionMessage;
}

interface IAdminCompanyMainTitle {
  title: string;
}
