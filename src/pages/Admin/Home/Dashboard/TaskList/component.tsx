import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";
import { ITaskListProps } from "./interface";
import { ListInfo } from "./ListInfo";

export const TaskList: FunctionComponent<ITaskListProps> = (
  { onSelectTask, approvableEntities }
) => (
  <>
    <div className={styles.info}>
      <ListInfo approvableEntities={approvableEntities}/>
    </div>
    <div className={styles.content}>
      <ListBody onSelectTask={onSelectTask} approvableEntities={approvableEntities}/>
    </div>
  </>
);
