import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ITitleProps } from "./interface";

const Title: FunctionComponent<ITitleProps> = (
  {
    title,
    subtitle
  }
) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.subtitle}>{subtitle}</h2>
  </div>
);

export { Title };
