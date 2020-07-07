import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";

import { UserDetails } from "./UserDetails";
import { DetailInfo } from "../../DetailInfo";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  {
    setStatus,
    company
  }
) => (
  <>
    <DetailInfo title={"Registro de Empresa"} createdAt={"1592951226327"} setStatus={setStatus}>
      <UserDetails company={company} />
    </DetailInfo>
  </>
);

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  company: ICompany;
}
