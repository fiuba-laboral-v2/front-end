import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { Detail } from "./Detail";
import { Chores } from "./Chores";

import styles from "./styles.module.scss";

const Dashboard: FunctionComponent = () => (
  <Window width="fullWidth" fixed={false}>
    <div className={styles.mainContent}>
      <Menu/>
      <Chores/>
      <Detail/>
    </div>
  </Window>
);

export { Dashboard };
