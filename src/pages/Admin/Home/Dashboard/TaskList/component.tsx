import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";
import { ITaskListProps } from "./interface";
import { ListInfo } from "./ListInfo";

export const TaskList: FunctionComponent<ITaskListProps> = props => (
  <>
    <div className={styles.info}>
      <ListInfo {...props}/>
    </div>
    <div className={styles.content}>
      <ListBody {...props}/>
    </div>
  </>
);
