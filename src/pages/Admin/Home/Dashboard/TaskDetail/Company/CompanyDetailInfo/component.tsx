import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

import { UserDetails } from "./UserDetails";
import { MainTitle } from "./MainTitle";
import { DetailInfo } from "../../../../../components/DetailInfo";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = ({
  setStatus,
  company,
  loading
}) => (
  <DetailInfo
    hidden={!company}
    loading={loading}
    mainTitle={<MainTitle company={company} />}
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
}
