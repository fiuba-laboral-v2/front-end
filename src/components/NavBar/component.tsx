import React, { FunctionComponent } from "react";
import { INavBarProps } from "./interfaces";
import { NavBarLink } from "./NavBarLink";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { noop } from "lodash";

export const NavBar: FunctionComponent<INavBarProps> = ({
  className,
  logOut,
  links,
  username,
  translations,
  currentPath,
  inDrawer = false,
  toggleDrawer = noop,
  bottomEl,
  navBarEl,
  iconEl,
  canScroll
}) => (
  <div className={classNames(styles.navBarContainer, className, { [styles.inDrawer]: inDrawer })}>
    <div className={styles.navBar} ref={navBarEl}>
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
            current={link.path === currentPath}
          />
        ))}
      </div>
      <div className={styles.bottom} ref={bottomEl}>
        <p className={styles.username}>{username}</p>
        <NavBarLink
          icon={ExitToAppIcon}
          onClick={logOut}
          to="#"
          inDrawer={inDrawer}
          text={translations.logOut}
        />
      </div>
    </div>
    <ExpandMoreIcon
      ref={iconEl}
      className={classNames(styles.scrollIndicator, { [styles.hidden]: !canScroll })}
      onClick={() =>
        navBarEl.current?.scrollTo({
          top: navBarEl.current.scrollHeight,
          behavior: "smooth"
        })
      }
    />
  </div>
);
