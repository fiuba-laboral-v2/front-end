import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";

const Navbar: FunctionComponent = () => (
  <div className={styles.navBar}>
    <h1 className={styles.title}>Bolsa de trabajo</h1>
  </div>
);

export default Navbar;
