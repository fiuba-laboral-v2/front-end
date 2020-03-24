import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICompanyLogoProps } from "./interface";

const CompanyLogo: FunctionComponent<ICompanyLogoProps> = (
  {
    companyName,
    logo
  }
) => (
  <div className={styles.logoContainer}>
    <img className={styles.logo} src={logo} alt={`${companyName} logo`}/>
  </div>
);

export { CompanyLogo };
