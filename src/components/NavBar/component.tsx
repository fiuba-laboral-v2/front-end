import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface INavBarProps {
  title: string;
  myCompanyProfile: string;
  logOut: string;
  username: string;
}

const NavBar: FunctionComponent<INavBarProps> = (
  {
    title,
    myCompanyProfile,
    logOut,
    username
  }
) => (
  <div className={styles.navBar}>
    <div className={styles.navigation}>
      <Link to="/">{title}</Link>
      <Link to="/my-company/">{myCompanyProfile}</Link>
    </div>
    <div>
      <p>{username}</p>
      <Link to="/">{logOut}</Link>
    </div>
  </div>
);

export default NavBar;
