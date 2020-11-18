import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const IsNewLabel: FunctionComponent<IComponentProps> = ({ label }) => (
  <div className={styles.isNew}>{label}</div>
);

interface IComponentProps {
  label: string;
}
