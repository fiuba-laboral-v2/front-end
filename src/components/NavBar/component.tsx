import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface INavBarProps {
  title: string;
  myCompanyProfile: string;
}

const NavBar: FunctionComponent<INavBarProps> = ({ title, myCompanyProfile }) => (
  <div className={styles.navBar}>
    <div className={styles.navigation}>
      <Link to="/">{title}</Link>
      <Link to="/my-company/">{myCompanyProfile}</Link>
    </div>
    <div>
      <span>Daniela Castro</span>
      <Link to="/">Cerrar Sesión</Link>
    </div>
  </div>
);

export default NavBar;
