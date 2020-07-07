import React, { FunctionComponent } from "react";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IApplicant } from "$interfaces/Applicant";
import { DetailInfo } from "../../DetailInfo";

export const ApplicantDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  {
    applicant,
    setStatus
  }
) => (
  <>
    <DetailInfo title={"Registro de Postulante"} createdAt={"1592951226327"} setStatus={setStatus}>
    </DetailInfo>
  </>
);

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  applicant: IApplicant;
}
