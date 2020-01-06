import React, { FunctionComponent } from "react";

import logo from "./logo_fiuba.png";
import styles from "./styles.module.scss";

const Logo: FunctionComponent = () => (
  <div>
    <img src={logo} className={styles.logo} alt="logo" />
  </div>
);

export default Logo;
