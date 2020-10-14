import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const ListInfo: FunctionComponent<IListInfoProps> = ({ translation }) => (
  <p className={styles.pendingTasks}>{translation}</p>
);

interface IListInfoProps {
  translation: string;
}
