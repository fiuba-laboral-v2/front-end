import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface INavBarProps {
  title: string;
  myCompanyProfile: string;
}

const NavBar: FunctionComponent<INavBarProps> = ({ title, myCompanyProfile }) => (
  <div className={styles.navBar}>
    <Link to="/" className={styles.title}>{title}</Link>
    <Link to="/company-profiles/1">{myCompanyProfile}</Link>
  </div>
);

export default NavBar;
