import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const MainTitle: FunctionComponent<IMainTitleProps> = ({ title, updatedAt, hidden }) => (
  <div className={styles.header} {...{ hidden }}>
    <div className={styles.main}>
      <p className={styles.title}>{title}</p>
      <TimeHumanizer since={updatedAt} />
    </div>
  </div>
);

interface IMainTitleProps {
  title: string;
  updatedAt?: string;
  hidden?: boolean;
}
