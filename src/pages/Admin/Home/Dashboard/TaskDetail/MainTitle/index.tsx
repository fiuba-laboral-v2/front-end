import React, { FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.scss";

export const MainTitle: FunctionComponent<IMainTitleProps> = (
  {
    title,
    humanizedTime
  }
) => (
  <div className={styles.header}>
    <div className={styles.main}>
      <p className={styles.title}>
        {title}
      </p>
      {humanizedTime}
    </div>
  </div>
);

interface IMainTitleProps {
  title: string;
  humanizedTime?: ReactNode;
}
