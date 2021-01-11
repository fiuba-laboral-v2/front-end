import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const AppliedTag: FunctionComponent<IComponentProps> = ({ label }) => (
  <div className={styles.tag}>{label}</div>
);

interface IComponentProps {
  label: string;
}
