import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const DataDetail: FunctionComponent<IDataDetail> = (
  {
    title,
    value
  }
) => (
  <p className={styles.data}>
    <span className={styles.label}>{title}</span>
    <span>{value}</span>
  </p>
);

interface IDataDetail {
  title: string;
  value: string;
}
