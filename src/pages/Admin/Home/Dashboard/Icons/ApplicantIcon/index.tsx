import React, { FunctionComponent } from "react";
import SchoolIcon from "@material-ui/icons/School";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const ApplicantIcon: FunctionComponent<SvgIconProps> = ({ className, ...props }) =>
  <SchoolIcon
    {...props}
    className={classNames(styles.applicantIcon, className)}
    fontSize="default"
  />;
