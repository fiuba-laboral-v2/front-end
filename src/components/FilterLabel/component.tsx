import React, { FunctionComponent } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const FilterLabel: FunctionComponent<IFilterLabelProps> = (
  {
    children,
    className,
    applied
  }
) => (
  <div className={classNames(styles.container, className, { [styles.applied]: applied })}>
    <span className={styles.label}>{children}</span>
    {applied ? <CancelIcon className={styles.icon}/> : <AddCircleIcon className={styles.icon}/>}
  </div>
);

interface IFilterLabelProps {
  className?: string;
  applied: boolean;
}
