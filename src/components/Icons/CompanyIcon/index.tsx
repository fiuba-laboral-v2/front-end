import React, { FunctionComponent } from "react";
import BusinessIcon from "@material-ui/icons/Business";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const CompanyIcon: FunctionComponent<SvgIconProps> = ({ className, fontSize, ...props }) => (
  <BusinessIcon
    className={classNames(styles.companyIcon, className)}
    fontSize={fontSize || "default"}
    {...props}
  />
);
