import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { ICompanyLogoProps } from "./interface";

const CompanyLogo: FunctionComponent<ICompanyLogoProps> = (
  {
    companyName,
    logo,
    size,
    className
  }
) => (
  <div className={classNames(styles.logoContainer, className, styles[size])}>
    <img
      className={styles.logo}
      src={logo}
      alt={`${companyName} logo`}
    />
  </div>
);

export { CompanyLogo };
