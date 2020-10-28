import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const LoginWindow: FunctionComponent<IComponent> = ({ className, children }) => (
  <div className={classNames(className, styles.mainContent)}>
    <div className={styles.loginMainContainer}>
      <div className={styles.logo} />
      <img className={styles.mobileLogo} src={"images/loginMobile.svg"} alt="FIUBA mobile logo" />
      <section className={styles.rightContainer}>{children}</section>
    </div>
  </div>
);

interface IComponent {
  className?: string;
}
