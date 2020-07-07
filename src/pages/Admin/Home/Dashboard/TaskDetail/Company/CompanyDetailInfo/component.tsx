import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";

import { UserDetails } from "./UserDetails";
import { MainTitle } from "./MainTitle";
import { DetailInfo } from "../../DetailInfo";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  {
    setStatus,
    company
  }
) => (
  <>
    <DetailInfo setStatus={setStatus} mainTitle={<MainTitle company={company}/>}>
      <UserDetails company={company} />
    </DetailInfo>
  </>
);

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  company: ICompany;
}
