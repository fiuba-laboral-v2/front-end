import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { UpdatedSince } from "$components/UpdatedSince";

export const MainTitle: FunctionComponent<IMainTitleProps> = (
  {
    title,
    updatedAt
  }
) => (
  <div className={styles.header}>
    <div className={styles.main}>
      <p className={styles.title}>
        {title}
      </p>
      {updatedAt && <UpdatedSince date={updatedAt} />}
    </div>
  </div>
);

interface IMainTitleProps {
  title: string;
  updatedAt?: string;
}
