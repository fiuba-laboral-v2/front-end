import React, { FunctionComponent } from "react";
import SchoolIcon from "@material-ui/icons/School";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const ApplicantIcon: FunctionComponent<IApplicantIconProps> = ({ className }) =>
  <SchoolIcon className={classNames(styles.applicantIcon, className)} fontSize="default"/>;

interface IApplicantIconProps {
  className?: string;
}
