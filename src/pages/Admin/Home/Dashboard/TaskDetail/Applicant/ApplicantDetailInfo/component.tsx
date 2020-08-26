import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IApplicant } from "$interfaces/Applicant";
import { DetailInfo } from "../../DetailInfo";
import { UserDetails } from "./UserDetails";
import { MainTitle } from "./MainTitle";

export const ApplicantDetailInfo: FunctionComponent<IApplicantDetailInfoProps> = (
  {
    applicant,
    setStatus
  }
) => (
  <DetailInfo
    mainTitle={<MainTitle applicant={applicant}/>}
    currentStatus={applicant.approvalStatus}
    setStatus={setStatus}
  >
    <UserDetails applicant={applicant}/>
  </DetailInfo>
);

export interface IApplicantDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  applicant: IApplicant;
}
