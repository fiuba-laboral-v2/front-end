import React, { ReactNode, FunctionComponent } from "react";
import { Card } from "$components/Card";
import styles from "./styles.module.scss";

interface IListContainer {
  children?: ReactNode;
}

export const ListContainer: FunctionComponent<IListContainer> = ({ children }) => (
  <Card largePadding className={styles.cardContainer}>
    {children}
  </Card>
);
