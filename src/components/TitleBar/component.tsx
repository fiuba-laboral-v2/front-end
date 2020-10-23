import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ITitleBarProps } from "./interface";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";

export const TitleBar: FunctionComponent<ITitleBarProps> = ({
  title,
  alwaysShowDrawerButton,
  toggleDrawer
}) => (
  <div className={styles.titleBar}>
    <IconButton
      className={classNames(styles.button, { [styles.alwaysShow]: alwaysShowDrawerButton })}
      onClick={toggleDrawer}
      disableRipple
    >
      <MenuIcon className={styles.icon} />
    </IconButton>
    <span className={styles.title}>{title}</span>
    <img src={"images/logo.svg"} className={styles.logo} alt="Logo de FIUBA" />
  </div>
);
