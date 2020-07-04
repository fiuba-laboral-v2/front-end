import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { CompanyDetail } from "$components/CompanyDetail";

import styles from "./styles.module.scss";

export const CompanyDetailContent: FunctionComponent<ICompanyDetailContentProps> = (
  { company }
) => <CompanyDetail className={styles.companyDetailsContainer} company={company}/>;

export interface ICompanyDetailContentProps {
  company: ICompany;
}
