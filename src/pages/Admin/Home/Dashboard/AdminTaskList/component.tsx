import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";
import { IApprovable } from "$interfaces/Approvable";

export const AdminTaskList: FunctionComponent<IAdminTaskListProps> = (
  { onSelectTask }
) => (
  <>
    <div className={styles.info}>
    </div>
    <div className={styles.content}>
      <ListBody onSelectTask={onSelectTask}/>
    </div>
  </>
);

interface IAdminTaskListProps {
  onSelectTask: (task: IApprovable) => void;
}
