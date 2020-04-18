import React, { FunctionComponent } from "react";

import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";

import styles from "./styles.module.scss";

export const Window: FunctionComponent = ({ children }) => (
  <div className={styles.window} >
    <NavBar/>
    <MainContent>
      {children}
    </MainContent>
  </div>
);
