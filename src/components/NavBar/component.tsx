import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { RoutesBuilder } from "$models/RoutesBuilder";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { INavBarTranslations } from "./interface";

export const NavBar: FunctionComponent<INavBarProps> = (
  {
    logOut,
    isLoggedIn,
    username,
    translations
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
          to={RoutesBuilder.company.list}>{translations.companies}
        </Link>
        <Link
          className={classNames({ [styles.logged]: !isLoggedIn })}
          to={RoutesBuilder.applicant.list}>{translations.applicants}
        </Link>
        <Link
          className={classNames({ [styles.logged]: !isLoggedIn })}
          to={RoutesBuilder.applicant.home}>{translations.jobOffers}
        </Link>
        <div className={styles.separator}/>
        <div className={styles.user}>
          {
            isLoggedIn ?
              <>
                <p className={styles.username}>{username}</p>
                <Link onClick={logOut} to="#">{translations.logOut}</Link>
              </>
              :
              <>
                <Link to={RoutesBuilder.login}>{translations.logIn}</Link>
                <Link to={RoutesBuilder.register}>{translations.signUp}</Link>
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
  username: string;
  translations: INavBarTranslations;
}
