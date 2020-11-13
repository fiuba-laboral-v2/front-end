import React, { FunctionComponent } from "react";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { ListBody } from "./ListBody";
import { ITaskListProps } from "./interfaces";
import { ListInfo } from "./ListInfo";
import styles from "./styles.module.scss";

export const TaskList: FunctionComponent<ITaskListProps> = ({
  adminTasks,
  statuses,
  translations,
  ...props
}) => (
  <div className={styles.taskList}>
    {adminTasks ? (
      <>
        <div className={styles.info}>
          <ListInfo statuses={statuses} translations={translations} {...props} />
        </div>
        <div className={styles.content}>
          <ListBody adminTasks={adminTasks} {...props} />
        </div>
      </>
    ) : (
      <LoadingSpinner className={styles.spinner} />
    )}
  </div>
);
