import React, { FunctionComponent } from "react";

import { LogInForm } from "./LogInForm";
import { LoginWindow } from "$components/LoginWindow";

import styles from "./styles.module.scss";

export const LogIn: FunctionComponent = () => (
  <LoginWindow>
    <LogInForm className={styles.form} />
  </LoginWindow>
);
