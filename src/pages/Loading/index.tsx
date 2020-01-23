import React, { FunctionComponent } from "react";

import Logo from "$components/Logo";

import styles from "./styles.module.scss";

const App: FunctionComponent = () => (
  <div>
    <header className={styles.homeCenter}>
      <div className={styles.logo}>
        <Logo/>
      </div>
    </header>
  </div>
);

export default App;
