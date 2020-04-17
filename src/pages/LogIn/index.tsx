import React, { FunctionComponent } from "react";

import { Window } from "$components/Window";
import { LogInForm } from "./LogInForm";

import styles from "./styles.module.scss";

const LogIn: FunctionComponent = () => (
  <Window className={styles.window}>
    <div className={styles.loginMainContainer}>
      <img className={styles.logo} src={"images/fiubaLogo.svg"} alt="Fiuba"/>
      <LogInForm className={styles.form}/>
    </div>
  </Window>
);

export { LogIn };
