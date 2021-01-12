import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IJobApplication } from "$interfaces/JobApplication";
import { DetailInfo } from "../../DetailInfo";
import { UserDetails } from "../../Applicant/ApplicantDetailInfo/UserDetails";
import { MainTitle } from "./MainTitle";
import { IUseRejectionMessage } from "../../RejectionMessageButton/interfaces";

export const JobApplicationDetailInfo: FunctionComponent<IComponentProps> = ({
  jobApplication,
  setStatus,
  currentStatus,
  loading,
  hideActions,
  useRejectionMessage
}) => (
  <DetailInfo
    hideActions={hideActions}
    hidden={!jobApplication}
    loading={loading}
    mainTitle={
      <MainTitle useRejectionMessage={useRejectionMessage} jobApplication={jobApplication} />
    }
    currentStatus={currentStatus}
    setStatus={setStatus}
  >
    <UserDetails applicant={jobApplication?.applicant} />
  </DetailInfo>
);

export interface IComponentProps {
  useRejectionMessage: IUseRejectionMessage;
  loading: boolean;
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
  jobApplication?: IJobApplication;
  currentStatus?: ApprovalStatus;
  hideActions?: boolean;
}
