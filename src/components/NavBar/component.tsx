import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

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
        <Link to="/my-company/">{myCompanyProfile}</Link>
        <div className={styles.separator}/>
        <div className={styles.user}>
          <p>{username}</p>
          <Link to="/">{logOut}</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
