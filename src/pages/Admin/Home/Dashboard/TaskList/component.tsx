import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";
import { ITaskListProps } from "./interface";
import { ListInfo } from "./ListInfo";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const TaskList: FunctionComponent<ITaskListProps> = ({ approvableEntities, ...props }) => {
  if (!approvableEntities) return <LoadingSpinner/>;

  return (
    <div className={styles.taskList}>
      <div className={styles.info}>
        <ListInfo approvableEntities={approvableEntities} {...props}/>
      </div>
      <div className={styles.content}>
        <ListBody approvableEntities={approvableEntities} {...props}/>
      </div>
    </div>
  );
};
