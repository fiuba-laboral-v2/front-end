import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

import { UserDetails } from "./UserDetails";
import { MainTitle } from "./MainTitle";
import { DetailInfo } from "../../DetailInfo";
import { IUseRejectionMessage } from "../../RejectionMessageButton/interfaces";
import { NotificationRecipient } from "../../Actions/StatusButton/interfaces";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = ({
  setStatus,
  company,
  loading,
  useRejectionMessage
}) => (
  <DetailInfo
    hidden={!company}
    loading={loading}
    notificationRecipient={NotificationRecipient.COMPANY}
    mainTitle={<MainTitle useRejectionMessage={useRejectionMessage} company={company} />}
    setStatus={setStatus}
    currentStatus={company?.approvalStatus}
  >
    <UserDetails company={company} />
  </DetailInfo>
);

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  company?: ICompany<IUser>;
  loading: boolean;
  useRejectionMessage: IUseRejectionMessage;
}
