import React, { FunctionComponent } from "react";
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
    <div>
      <ListInfo statuses={statuses} translations={translations} {...props} />
    </div>
    <div className={styles.content}>
      <ListBody
        emptyListMessage={translations?.emptyList}
        adminTasks={adminTasks || []}
        {...props}
      />
    </div>
  </div>
);
