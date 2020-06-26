import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";
import { IAdminTaskListProps } from "./interface";

export const AdminTaskList: FunctionComponent<IAdminTaskListProps> = (
  { onSelectTask, approvableEntities }
) => (
  <>
    <div className={styles.info}>
    </div>
    <div className={styles.content}>
      <ListBody onSelectTask={onSelectTask} approvableEntities={approvableEntities}/>
    </div>
  </>
);
