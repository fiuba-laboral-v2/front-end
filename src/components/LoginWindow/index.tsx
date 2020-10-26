import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { Headline } from "../../components/Headline";

import styles from "./styles.module.scss";

export const LoginWindow: FunctionComponent<IComponent> = ({ className, children, title }) => (
  <div className={classNames(className, styles.mainContent)}>
    <div className={styles.loginMainContainer}>
      <div className={styles.logo} />
      <section className={styles.rightContainer}>
        <div className={styles.middleSection}>
          <Headline className={styles.title}>{title}</Headline>
          {children}
        </div>
      </section>
    </div>
  </div>
);

interface IComponent {
  title: string;
  className?: string;
}
