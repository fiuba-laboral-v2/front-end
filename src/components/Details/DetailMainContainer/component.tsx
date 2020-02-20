import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IDetailMainContainerProps } from "./interface";

const DetailMainContainer: FunctionComponent<IDetailMainContainerProps> = (
  {
    render
  }
) => (
  <div className={styles.mainContainer}>
    <div className={styles.detailContainer}>
      {render()}
    </div>
  </div>
);

export { DetailMainContainer };
