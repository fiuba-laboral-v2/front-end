import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { AdminTaskDetail } from "./AdminTaskDetail";
import { AdminTaskList } from "./AdminTaskList";

import styles from "./styles.module.scss";

const Dashboard: FunctionComponent = () => {
  return (
    <Window width="fullWidth">
      <div className={styles.mainContent}>
        <Menu/>
        <AdminTaskList/>
        <AdminTaskDetail/>
      </div>
    </Window>
  );
};

export { Dashboard };
