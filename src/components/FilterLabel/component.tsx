import React, { FunctionComponent } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const FilterLabel: FunctionComponent<IFilterLabelProps> = (
  { children, className }
) => (
  <div className={classNames(styles.container, className)}>
    <span className={styles.label}>{children}</span>
    <CancelIcon className={styles.icon}/>
  </div>
);

interface IFilterLabelProps {
  className?: string;
}
