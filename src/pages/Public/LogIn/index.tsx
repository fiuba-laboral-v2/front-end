import React, { FunctionComponent } from "react";
import { LogInForm } from "./LogInForm";
import styles from "./styles.module.scss";

const LogIn: FunctionComponent = () => (
  <div className={styles.mainContent}>
    <div className={styles.loginMainContainer}>
      <div className={styles.logo} />
      <LogInForm className={styles.form}/>
    </div>
  </div>
);

export { LogIn };
