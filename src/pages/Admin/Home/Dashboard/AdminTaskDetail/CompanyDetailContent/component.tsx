import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { CompanyDetail } from "$components/CompanyDetail";

import styles from "./styles.module.scss";

export const CompanyDetailContent: FunctionComponent<ICompanyDetailContentProps> = (
  { company }
) =>
  <div className={styles.companyDetailsContainer}>
    <CompanyDetail company={company}/>
  </div>;

export interface ICompanyDetailContentProps {
  company: ICompany;
}
