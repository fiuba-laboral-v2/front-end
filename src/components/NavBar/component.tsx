import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { INavBarTranslations } from "./interface";
import { INavBarLink } from "$models/NavBarLinks/Interfaces";
import { NavBarLink } from "./NavBarLink";
import styles from "./styles.module.scss";

export const NavBar: FunctionComponent<INavBarProps> = ({
  logOut,
  links,
  isLoggedIn,
  username,
  translations
}) => (
  <div className={styles.navBarContainer}>
    <div className={styles.navBar}>
      {links.map(link => (
        <NavBarLink key={link.path} disabledErrorMessage={link.tooltipMessage} to={link.path}>
          {link.title}
        </NavBarLink>
      ))}
      {isLoggedIn ? (
        <>
          <p className={styles.username}>{username}</p>
          <NavBarLink onClick={logOut} to="#">
            {translations.logOut}
          </NavBarLink>
        </>
      ) : (
        <>
          <NavBarLink to={RoutesBuilder.public.login()}>{translations.logIn}</NavBarLink>
          <NavBarLink to={RoutesBuilder.public.register()}>{translations.signUp}</NavBarLink>
        </>
      )}
    </div>
  </div>
);

interface INavBarProps {
  logOut: () => void;
  links: INavBarLink[];
  isLoggedIn: boolean;
  username?: string;
  translations: INavBarTranslations;
}
