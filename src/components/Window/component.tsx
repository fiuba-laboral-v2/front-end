import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";

import styles from "./styles.module.scss";

export const Window: FunctionComponent<IWindow> = (
  {
    className,
    children
  }
) => (
  <div className={styles.window} >
    <NavBar/>
    <MainContent className={classNames(className, styles.mainContent)}>
      {children}
    </MainContent>
  </div>
);

interface IWindow {
  className?: string;
}
