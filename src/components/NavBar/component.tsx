import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { INavBarProps } from "./interface";
import { NavBarLink } from "./NavBarLink";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { noop } from "lodash";

export const NavBar: FunctionComponent<INavBarProps> = ({
  className,
  logOut,
  links,
  isLoggedIn,
  username,
  translations,
  inDrawer = false,
  toggleDrawer = noop
}) => (
  <div className={classNames(styles.navBarContainer, className, { [styles.inDrawer]: inDrawer })}>
    <div className={styles.navBar}>
      <div className={styles.top}>
        {links.map(link => (
          <NavBarLink
            icon={link.icon}
            key={link.path}
            disabledErrorMessage={link.tooltipMessage}
            to={link.path}
            inDrawer={inDrawer}
            text={link.title}
            onClick={toggleDrawer}
          />
        ))}
      </div>
      <div className={styles.bottom}>
        {isLoggedIn ? (
          <>
            <p className={styles.username}>{username}</p>
            <NavBarLink
              icon={ExitToAppIcon}
              onClick={logOut}
              to="#"
              inDrawer={inDrawer}
              text={translations.logOut}
            />
          </>
        ) : (
          <>
            <NavBarLink
              icon={PersonIcon}
              to={RoutesBuilder.public.login()}
              inDrawer={inDrawer}
              text={translations.logIn}
              onClick={toggleDrawer}
            />
          </>
        )}
      </div>
    </div>
  </div>
);
