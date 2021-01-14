import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TableActions: FunctionComponent<IComponentProps> = ({ className, children }) => (
  <div className={className}>
    <div className={styles.actions}>{children}</div>
  </div>
);

interface IComponentProps {
  className?: string;
}
