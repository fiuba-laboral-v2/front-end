import React, { FunctionComponent } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const JobApplicationIcon: FunctionComponent<SvgIconProps> = ({
  className,
  fontSize,
  ...props
}) => (
  <PersonAddIcon
    {...props}
    className={classNames(styles.jobApplicationIcon, className)}
    {...{ fontSize: fontSize || "default" }}
  />
);
