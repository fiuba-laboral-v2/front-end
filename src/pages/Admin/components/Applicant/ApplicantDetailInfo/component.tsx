import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IApplicant } from "$interfaces/Applicant";
import { DetailInfo } from "../../DetailInfo";
import { UserDetails } from "./UserDetails";
import { MainTitle } from "./MainTitle";
import { IUseRejectionMessage } from "../../RejectionMessageButton/interfaces";
import { NotificationRecipient } from "../../Actions/StatusButton/interfaces";

export const ApplicantDetailInfo: FunctionComponent<IApplicantDetailInfoProps> = ({
  applicant,
  setStatus,
  loading,
  hideActions,
  useRejectionMessage
}) => (
  <DetailInfo
    hideActions={hideActions}
    hidden={!applicant}
    loading={loading}
    notificationRecipient={NotificationRecipient.APPLICANT}
    mainTitle={<MainTitle useRejectionMessage={useRejectionMessage} applicant={applicant} />}
    currentStatus={applicant?.approvalStatus}
    setStatus={setStatus}
  >
    <UserDetails applicant={applicant} />
  </DetailInfo>
);

export interface IApplicantDetailInfoProps {
  useRejectionMessage: IUseRejectionMessage;
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  applicant?: IApplicant;
  loading: boolean;
  hideActions?: boolean;
}
