import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TitleBar: FunctionComponent<ITitleBarProps> = ({ title }) => (
  <div className={styles.titleBar}>
    <span className={styles.title}>{title}</span>
    <img src={"images/logo.svg"} className={styles.logo} alt="Logo de FIUBA" />
  </div>
);

interface ITitleBarProps {
  title: string;
}
