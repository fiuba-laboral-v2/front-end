import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import styles from "./styles.module.scss";

export const ListContainer: FunctionComponent = ({ children }) => (
  <Card className={styles.cardContainer} withOutBorder >
    {children}
  </Card>
);
