import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import styles from "./styles.module.scss";
import { ITaskListTranslations } from "../interface";

export const ListInfo: FunctionComponent<IListInfoProps> = (
  { approvableEntities, translations }
) => (
  <p className={styles.pendingTasks}>
    {translations.pendingTasks}:
    <span className={styles.pendingCount}>{` ${approvableEntities.length}`}</span>
  </p>
);

interface IListInfoProps {
  approvableEntities: IApprovable[];
  translations: ITaskListTranslations;
}
