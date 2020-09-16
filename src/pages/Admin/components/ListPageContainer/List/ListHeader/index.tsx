import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const ListHeader: FunctionComponent<IListHeader> = ({ className, children }) => (
  <div className={classNames(styles.headerContainer, className)}>
    {children}
  </div>
);

interface IListHeader {
  className?: string;
}
