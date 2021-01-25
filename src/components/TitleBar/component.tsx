import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ITitleBarProps } from "./interfaces";
import { IconButton } from "@material-ui/core";
import { ChangeCurrentRoleButton } from "$components/ChangeCurrentRoleButton";
import { FiubaLogo } from "./FiubaLogo";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Link } from "react-router-dom";

export const TitleBar: FunctionComponent<ITitleBarProps> = ({
  canChangeCurrentRole,
  title,
  alwaysShowDrawerButton,
  showNavBar,
  toggleDrawer
}) => (
  <div className={styles.titleBar}>
    {showNavBar && (
      <IconButton
        className={classNames(styles.button, { [styles.alwaysShow]: alwaysShowDrawerButton })}
        onClick={toggleDrawer}
        disableRipple
      >
        <MenuIcon className={styles.icon} />
      </IconButton>
    )}
    <span className={styles.titleContainer}>
      <Link to={RoutesBuilder.public.home()} className={styles.title}>
        {title}
      </Link>
    </span>
    {canChangeCurrentRole() && (
      <div className={styles.rightContainer}>
        <ChangeCurrentRoleButton className={styles.changeCurrentRoleButton} />
        <FiubaLogo className={styles.logoContainer} imageClassName={styles.logo} />
      </div>
    )}
    {!canChangeCurrentRole() && <FiubaLogo />}
  </div>
);
