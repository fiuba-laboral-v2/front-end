import React, { FunctionComponent } from "react";
import { TAdminTask } from "$interfaces/AdminTask";
import styles from "./styles.module.scss";

export const ListInfo: FunctionComponent<IListInfoProps> = (
  { adminTasks, translation }
) => (
  <p className={styles.pendingTasks}>
    {translation}
    <span className={styles.pendingCount}>{` ${adminTasks.length}`}</span>
  </p>
);

interface IListInfoProps {
  adminTasks: TAdminTask[];
  translation: string;
}
