import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const SeededUsers: FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    <p className={styles.title}>{"USUARIOS DE PRUEBA"}</p>
    <p className={styles.seededUsers}>{children}</p>
  </div>
);
