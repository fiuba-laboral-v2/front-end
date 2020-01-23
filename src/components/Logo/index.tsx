import React, { FunctionComponent } from "react";

import logo from "./logoFiuba.png";
import styles from "./styles.module.scss";

const Logo: FunctionComponent = () => (
  <div>
    <img src={logo} className={styles.logo} alt="logo"/>
  </div>
);

export default Logo;
