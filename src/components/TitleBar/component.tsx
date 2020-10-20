import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ITitleBarProps } from "./interface";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const TitleBar: FunctionComponent<ITitleBarProps> = ({
  title,
  withDrawerButton,
  toggleDrawer
}) => (
  <div className={styles.titleBar}>
    {withDrawerButton && (
      <IconButton className={styles.button} onClick={toggleDrawer} disableRipple>
        <MenuIcon className={styles.icon} />
      </IconButton>
    )}
    <span className={styles.title}>{title}</span>
    <img src={"images/logo.svg"} className={styles.logo} alt="Logo de FIUBA" />
  </div>
);
