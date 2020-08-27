import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IJobApplication } from "$interfaces/JobApplication";
import { DetailInfo } from "../../DetailInfo";
import { MainTitle } from "./MainTitle";

export const JobApplicationDetailInfo: FunctionComponent<IComponentProps> = (
  {
    jobApplication,
    setStatus,
    currentStatus
  }
) => (
  <DetailInfo
    mainTitle={<MainTitle jobApplication={jobApplication} />}
    currentStatus={currentStatus}
    setStatus={setStatus}
  >
    algo
  </DetailInfo>
);

export interface IComponentProps {
  setStatus: (status: ApprovalStatus) => void;
  jobApplication: IJobApplication;
  currentStatus: ApprovalStatus;
}
