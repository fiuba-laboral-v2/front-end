import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";
import { ListBody } from "./ListBody";

export const AdminTaskList: FunctionComponent = () => (
  <>
    <div className={styles.info}>
    </div>
    <div className={styles.content}>
      <ListBody/>
    </div>
  </>
);
