import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { ICompanyLogoProps } from "./interface";

const CompanyLogo: FunctionComponent<ICompanyLogoProps> = (
  {
    companyName,
    logo,
    size,
    className,
    onClick,
    children
  }
) => (
  <div className={classNames(styles.logoContainer, className, styles[size])} onClick={onClick}>
    <img
      className={styles.logo}
      src={logo}
      alt={`Logo de ${companyName || "la empresa"}`}
    />
    {children}
  </div>
);

export { CompanyLogo };
