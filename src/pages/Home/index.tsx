import React, { FunctionComponent } from "react";

import Logo from "$components/Logo";
import NavBar from "$components/NavBar";

import styles from "./styles.module.scss";

const Home: FunctionComponent = () => (
  <div>
    <NavBar/>
    <header className={styles.homeCenter}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <p>
        Bolsa de trabajo de la FIUBA
      </p>
    </header>
  </div>
);

export default Home;
