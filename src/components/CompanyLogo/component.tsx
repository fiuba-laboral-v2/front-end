import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { CompanyIcon } from "$components/Icons/CompanyIcon";

import { companyIconStyles } from "./styles";
import styles from "./styles.module.scss";

export const CompanyLogo: FunctionComponent<ICompanyLogoProps> = ({
  mobileLayout,
  logo,
  size,
  className,
  onClick,
  useDefaultIcon
}) => (
  <div
    className={classNames(styles.logoContainer, className, styles[size], {
      [styles.mobile]: mobileLayout
    })}
    onClick={onClick}
  >
    {logo && <img className={styles.logo} src={logo} alt="" draggable={false} />}
    {useDefaultIcon && !logo && (
      <CompanyIcon classes={companyIconStyles()} className={styles.defaultIcon} />
    )}
  </div>
);

interface ICompanyLogoProps {
  useDefaultIcon: boolean;
  mobileLayout?: boolean;
  companyName?: string;
  logo?: string;
  size: "small" | "medium" | "large" | "extraLarge";
  className?: string;
  onClick?: () => void;
}
