import React, { FunctionComponent } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const JobApplicationIcon: FunctionComponent<IJobApplicationIconProps> = ({ className }) =>
  <PersonAddIcon
    className={classNames(styles.jobApplicationIcon, className)}
    fontSize="default"
  />;

interface IJobApplicationIconProps {
  className?: string;
}
