import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Link } from "$components/Link";

export const MainTitle: FunctionComponent<IMainTitleProps> = ({
  title,
  updatedAt,
  hidden,
  link
}) => (
  <div className={styles.header} {...{ hidden }}>
    <div className={styles.main}>
      {!link && <p className={styles.title}>{title}</p>}
      {link && (
        <Link to={link} className={styles.title}>
          {title}
        </Link>
      )}
      <TimeHumanizer since={updatedAt} />
    </div>
  </div>
);

interface IMainTitleProps {
  title: string;
  updatedAt?: string;
  hidden?: boolean;
  link?: string;
}
