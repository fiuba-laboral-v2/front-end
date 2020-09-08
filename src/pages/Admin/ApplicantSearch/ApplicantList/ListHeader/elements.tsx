import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const HeaderContainer: FunctionComponent = ({ children }) => (
  <div className={styles.headerContainer}>
    {children}
  </div>
);

interface IItem {
  column: string;
  text: string;
}

export const Item: FunctionComponent<IItem> = ({ column, text }) => (
  <p className={classNames(styles.item, styles[`${column}`])}>
    {text}
  </p>
);
