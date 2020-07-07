import React, { FunctionComponent } from "react";
import { TimeHumanizer } from "$components/TimeHumanizer";
import styles from "./styles.module.scss";

export const MainTitle: FunctionComponent<IMainTitleProps> = (
  {
    title,
    createdAt
  }
) =>
<div className={styles.header}>
  <div className={styles.main}>
    <p className={styles.title}>
      {title}
    </p>
    <TimeHumanizer since={createdAt}/>
  </div>
</div>;

export interface IMainTitleProps {
  title: string;
  createdAt: string;
}
