import React, { FunctionComponent } from "react";

import { LogInForm } from "./LogInForm";

import styles from "./styles.module.scss";
import { MainContent } from "../../components/MainContent";

const LogIn: FunctionComponent = () => (
  <MainContent className={styles.mainContent}>
    <div className={styles.loginMainContainer}>
      <div className={styles.logo} />
      <LogInForm className={styles.form}/>
    </div>
  </MainContent>
);

export { LogIn };
