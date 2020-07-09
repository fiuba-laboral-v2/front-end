import React, { FunctionComponent } from "react";
import { AdminTask } from "$interfaces/AdminTask";
import styles from "./styles.module.scss";
import { ITaskListTranslations } from "../interface";

export const ListInfo: FunctionComponent<IListInfoProps> = (
  { adminTasks, translations }
) => (
  <p className={styles.pendingTasks}>
    {translations.pendingTasks}:
    <span className={styles.pendingCount}>{` ${adminTasks.length}`}</span>
  </p>
);

interface IListInfoProps {
  adminTasks: AdminTask[];
  translations: ITaskListTranslations;
}
