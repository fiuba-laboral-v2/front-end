import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { RoutesBuilder } from "$src/routesBuilder";

import styles from "./styles.module.scss";

export const NavBar: FunctionComponent<INavBarProps> = (
  {
    companies,
    applicants,
    signUp,
    username
  }
) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.main}>
        <div className={styles.toggle}>
          <div className={styles.separator}/>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <MenuIcon/>
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${showMenu && styles.showOnMobile}`}>
        <Link to={RoutesBuilder.company.list()}>{companies}</Link>
        <Link to={RoutesBuilder.applicant.list()}>{applicants}</Link>
        <div className={styles.separator}/>
        <div className={styles.user}>
          <p className={styles.userName}>{username}</p>
          <Link to={RoutesBuilder.applicant.signUp()}>{signUp}</Link>
        </div>
      </div>
    </div>
  );
};

interface INavBarProps {
  companies: string;
  applicants: string;
  signUp: string;
  username: string;
}
