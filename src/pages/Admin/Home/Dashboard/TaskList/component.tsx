import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";
import { ITaskListProps } from "./interface";
import { ListInfo } from "./ListInfo";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const TaskList: FunctionComponent<ITaskListProps> = ({ adminTasks, ...props }) => {
  if (!adminTasks) return <LoadingSpinner/>;

  return (
    <div className={styles.taskList}>
      <div className={styles.info}>
        <ListInfo adminTasks={adminTasks} {...props}/>
      </div>
      <div className={styles.content}>
        <ListBody adminTasks={adminTasks} {...props}/>
      </div>
    </div>
  );
};
