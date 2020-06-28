import React, { FunctionComponent } from "react";

import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";

import { UserDetails } from "./UserDetails";
import { Actions } from "./Actions";
import { MainTitle } from "./MainTitle";

import styles from "./styles.module.scss";

export const CompanyDetailInfo: FunctionComponent<ICompanyDetailInfoProps> = (
  { setStatus, company }
) => <>
  <MainTitle company={company}/>
  <div className={styles.details}>
    <UserDetails company={company} />
    <Actions setStatus={setStatus} />
  </div>
</>;

export interface ICompanyDetailInfoProps {
  setStatus: (status: ApprovalStatus) => void;
  company: ICompany;
}
