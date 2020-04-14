import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { RoutesBuilder } from "$models/RoutesBuilder";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const NavBar: FunctionComponent<INavBarProps> = (
  {
    logOut,
    isLoggedIn,
    companies,
    applicants,
    signUp,
    username
  }
) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.navBar}>
      <div className={styles.main}>
        <div className={styles.toggle}>
          <div className={styles.separator}/>
          <div className={styles.menuIcon} onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon/>
          </div>
        </div>
      </div>
      <div className={classNames(styles.menu, showMenu && styles.showOnMobile)}>
        <Link
          className={classNames({ [styles.logged]: !isLoggedIn })}
          to={RoutesBuilder.company.list()}>{companies}
        </Link>
        <Link
          className={classNames({ [styles.logged]: !isLoggedIn })}
          to={RoutesBuilder.applicant.list()}>{applicants}
        </Link>
        <Link
          className={classNames({ [styles.logged]: !isLoggedIn })}
          to={RoutesBuilder.applicant.home()}>{"Ofertas de trabajo"}
        </Link>
        <div className={styles.separator}/>
        <div className={styles.user}>
          {
            isLoggedIn ?
              <>
                <p className={styles.userName}>{username}</p>
                <Link onClick={logOut} to="#">{"Cerrar Sesión"}</Link>
              </>
              :
              <>
                <Link to={RoutesBuilder.login}>{"Iniciar Sesión"}</Link>
                <Link to={RoutesBuilder.applicant.signUp}>{signUp}</Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

interface INavBarProps {
  logOut: () => void;
  isLoggedIn: boolean;
  companies: string;
  applicants: string;
  signUp: string;
  username: string;
}
