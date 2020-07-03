import React, { FunctionComponent } from "react";
import BusinessIcon from "@material-ui/icons/Business";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const CompanyIcon: FunctionComponent<ICompanyIconProps> = ({ className }) =>
  <BusinessIcon className={classNames(styles.companyIcon, className)} fontSize="default"/>;

interface ICompanyIconProps {
  className?: string;
}
