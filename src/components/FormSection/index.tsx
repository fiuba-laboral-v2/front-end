import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const FormSection: FunctionComponent = ({ children }) => (
  <div className={styles.formSection}>{children}</div>
);
