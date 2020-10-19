import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { INavBarTranslations } from "./interface";
import { INavBarLink } from "$models/NavBarLinks/Interfaces";
import { NavBarLink } from "./NavBarLink";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
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
      <div className={styles.top}>
        {links.map(link => (
          <NavBarLink
            icon={link.icon}
            key={link.path}
            disabledErrorMessage={link.tooltipMessage}
            to={link.path}
          >
            {link.title}
          </NavBarLink>
        ))}
      </div>
      <div className={styles.bottom}>
        {isLoggedIn ? (
          <>
            <p className={styles.username}>{username}</p>
            <NavBarLink icon={ExitToAppIcon} onClick={logOut} to="#">
              {translations.logOut}
            </NavBarLink>
          </>
        ) : (
          <>
            <NavBarLink icon={PersonIcon} to={RoutesBuilder.public.login()}>
              {translations.logIn}
            </NavBarLink>
            <NavBarLink icon={PersonAddIcon} to={RoutesBuilder.public.register()}>
              {translations.signUp}
            </NavBarLink>
          </>
        )}
      </div>
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
