import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { INavBarProps } from "./interface";

import styles from "./styles.module.scss";

const NavBar: FunctionComponent<INavBarProps> = (
  {
    title,
    myCompany,
    logOut,
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
        <Link to="/">{title}</Link>
        <div className={styles.toggle}>
          <div className={styles.separator}/>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <MenuIcon/>
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${showMenu && styles.showOnMobile}`}>
        <Link to="/my-company/">{myCompany}</Link>
        <div className={styles.separator}/>
        <div className={styles.user}>
          <p className={styles.userName}>{username}</p>
          <Link to="/">{logOut}</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
