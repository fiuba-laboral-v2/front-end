import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const CompanyLogo: FunctionComponent<ICompanyLogoProps> = (
  {
    mobileLayout,
    companyName,
    logo,
    size,
    className,
    onClick,
    children
  }
) => (
  <div
    className={classNames(styles.logoContainer, className, styles[size], {
      [styles.mobile]: mobileLayout
    })}
    onClick={onClick}
  >
    <img
      className={styles.logo}
      src={logo}
      alt={`Logo de ${companyName || "la empresa"}`}
    />
    {children}
  </div>
);

interface ICompanyLogoProps {
  mobileLayout?: boolean;
  companyName?: string;
  logo?: string;
  size: "small" | "medium" | "large" | "extraLarge";
  className?: string;
  onClick?: () => void;
}
