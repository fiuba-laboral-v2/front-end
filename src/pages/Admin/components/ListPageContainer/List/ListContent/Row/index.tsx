import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Listable } from "../../../interfaces";

export const Row: FunctionComponent<IRows> = ({ items, className, children }) => (
  <div className={styles.rowsContainer}>
    {items.map(item => (
      <div key={item.uuid} className={classNames(styles.row, className)}>
        {children(item)}
      </div>
    ))}
  </div>
);

interface IRows {
  items: Listable[];
  className?: string;
  children: (item: Listable) => ReactNode;
}
