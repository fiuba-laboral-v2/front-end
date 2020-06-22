import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { List } from "./List";

export const AdminTaskList: FunctionComponent = () => (
  <>
    <div className={styles.info}>
    </div>
    <div className={styles.content}>
      <List/>
    </div>
  </>
);
