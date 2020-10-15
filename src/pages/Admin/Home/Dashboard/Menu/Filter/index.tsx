import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Filter: FunctionComponent<IFilterProps> = ({ title, children }) => (
  <section className={styles.filterContainer}>
    <p className={styles.title}>{title}</p>
    {children}
  </section>
);

interface IFilterProps {
  title: string;
}
