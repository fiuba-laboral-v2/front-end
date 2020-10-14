import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";

import { Link } from "$components/Link";
import MenuIcon from "@material-ui/icons/Menu";

import { RoutesBuilder } from "$models/RoutesBuilder";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { INavBarTranslations } from "./interface";
import { INavBarLink } from "$models/NavBarLinks/Interfaces";

export const NavBar: FunctionComponent<INavBarProps> = ({
  logOut,
  links,
  isLoggedIn,
  username,
  translations
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classnames(styles.navBar)}>
      <div className={styles.main}>
        <div className={styles.toggle}>
          <div className={styles.separator} />
          <div className={styles.menuIcon} onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className={classNames(styles.menu, showMenu && styles.showOnMobile)}>
        {links.map(link => (
          <Link key={link.path} disabledErrorMessage={link.tooltipMessage} to={link.path}>
            {link.title}
          </Link>
        ))}
        <div className={styles.separator} />
        <div className={styles.user}>
          {isLoggedIn ? (
            <>
              <p className={styles.username}>{username}</p>
              <Link onClick={logOut} to="#">
                {translations.logOut}
              </Link>
            </>
          ) : (
            <>
              <Link to={RoutesBuilder.public.login()}>{translations.logIn}</Link>
              <Link to={RoutesBuilder.public.register()}>{translations.signUp}</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

interface INavBarProps {
  logOut: () => void;
  links: INavBarLink[];
  isLoggedIn: boolean;
  username?: string;
  translations: INavBarTranslations;
}
