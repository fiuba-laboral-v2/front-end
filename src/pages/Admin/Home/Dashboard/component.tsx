import React, { FunctionComponent } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { Details } from "./Details";
import { Chores } from "./Chores";

import styles from "./styles.module.scss";

const Dashboard: FunctionComponent = () => (
  <Window width="wide" fixed={false}>
    <div className={styles.mainContent}>
      <Menu/>
      <Chores/>
      <Details/>
    </div>
  </Window>
);

export { Dashboard };
