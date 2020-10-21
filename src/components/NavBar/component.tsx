import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { INavBarProps } from "./interface";
import { NavBarLink } from "./NavBarLink";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const NavBar: FunctionComponent<INavBarProps> = ({
  logOut,
  links,
  isLoggedIn,
  username,
  translations,
  inDrawer = false
}) => (
  <div className={classNames(styles.navBarContainer, { [styles.inDrawer]: inDrawer })}>
    <div className={styles.navBar}>
      <div className={styles.top}>
        {links.map(link => (
          <NavBarLink
            icon={link.icon}
            key={link.path}
            disabledErrorMessage={link.tooltipMessage}
            to={link.path}
            inDrawer={inDrawer}
          >
            {link.title}
          </NavBarLink>
        ))}
      </div>
      <div className={styles.bottom}>
        {isLoggedIn ? (
          <>
            <p className={styles.username}>{username}</p>
            <NavBarLink icon={ExitToAppIcon} onClick={logOut} to="#" inDrawer={inDrawer}>
              {translations.logOut}
            </NavBarLink>
          </>
        ) : (
          <>
            <NavBarLink icon={PersonIcon} to={RoutesBuilder.public.login()} inDrawer={inDrawer}>
              {translations.logIn}
            </NavBarLink>
            <NavBarLink
              icon={PersonAddIcon}
              to={RoutesBuilder.public.register()}
              inDrawer={inDrawer}
            >
              {translations.signUp}
            </NavBarLink>
          </>
        )}
      </div>
    </div>
  </div>
);
