import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IApplicant } from "$interfaces/Applicant";
import { DetailInfo } from "../../DetailInfo";
import { UserDetails } from "./UserDetails";

export const ApplicantDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  {
    applicant,
    setStatus
  }
) => (
  <>
    <DetailInfo title={"Registro de Postulante"} createdAt={"1592951226327"} setStatus={setStatus}>
      <UserDetails applicant={applicant}/>
    </DetailInfo>
  </>
);

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  applicant: IApplicant;
}
