import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { Detail } from "./Detail";
import { PendingApprovableList } from "./PendingApprovableList";

import styles from "./styles.module.scss";

const Dashboard: FunctionComponent = () => (
  <Window width="fullWidth">
    <div className={styles.mainContent}>
      <Menu/>
      <PendingApprovableList/>
      <Detail/>
    </div>
  </Window>
);

export { Dashboard };
