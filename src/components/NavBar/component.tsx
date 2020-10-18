import React, { FunctionComponent } from "react";

import { Link } from "$components/Link";

import { RoutesBuilder } from "$models/RoutesBuilder";

import styles from "./styles.module.scss";
import { INavBarTranslations } from "./interface";
import { INavBarLink } from "$models/NavBarLinks/Interfaces";

export const NavBar: FunctionComponent<INavBarProps> = ({
  logOut,
  links,
  isLoggedIn,
  username,
  translations
}) => (
  <div className={styles.navBar}>
    {links.map(link => (
      <Link key={link.path} disabledErrorMessage={link.tooltipMessage} to={link.path}>
        {link.title}
      </Link>
    ))}
    <div className={styles.separator} />
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
);

interface INavBarProps {
  logOut: () => void;
  links: INavBarLink[];
  isLoggedIn: boolean;
  username?: string;
  translations: INavBarTranslations;
}
