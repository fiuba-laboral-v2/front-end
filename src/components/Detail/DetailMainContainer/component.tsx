import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

const DetailMainContainer: FunctionComponent = ({ children}) => (
  <div className={styles.mainContainer}>
    <div className={styles.detailContainer}>
      {children}
    </div>
  </div>
);

export { DetailMainContainer };
