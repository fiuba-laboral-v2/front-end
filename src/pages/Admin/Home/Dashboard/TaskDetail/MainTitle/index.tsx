import React, { FunctionComponent } from "react";
import { CreatedSince } from "$components/CreatedSince";
import styles from "./styles.module.scss";

export const MainTitle: FunctionComponent<IMainTitleProps> = (
  {
    title,
    createdAt
  }
) => (
  <div className={styles.header}>
    <div className={styles.main}>
      <p className={styles.title}>
        {title}
      </p>
      {createdAt && <CreatedSince date={createdAt} />}
    </div>
  </div>
);

interface IMainTitleProps {
  title: string;
  createdAt?: string;
}
