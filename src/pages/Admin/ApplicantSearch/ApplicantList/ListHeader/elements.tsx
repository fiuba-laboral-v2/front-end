import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IHeaderContainer {
  children: ReactNode;
}

export const HeaderContainer: FunctionComponent<IHeaderContainer> = ({ children }) => (
<div className={styles.headerContainer}>
  {children}
</div>
);

interface IItem {
  key: string;
  text: string;
}

export const Item: FunctionComponent<IItem> = ({ key, text }) => (
  <p key={key} className={classNames(styles.item, styles[`${key}`])}>
    {text}
  </p>
);
