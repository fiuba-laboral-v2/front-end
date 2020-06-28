import React, { FunctionComponent } from "react";
import { IApprovable } from "$interfaces/Approvable";
import styles from "./styles.module.scss";

export const ListInfo: FunctionComponent<IListInfoProps> = (
  { approvableEntities }
) => (
  <p className={styles.pendingTasks}>
    Tareas pendientes:
    <span className={styles.pendingCount}>{` ${approvableEntities.length}`}</span>
  </p>
);

interface IListInfoProps {
  approvableEntities: IApprovable[];
}
