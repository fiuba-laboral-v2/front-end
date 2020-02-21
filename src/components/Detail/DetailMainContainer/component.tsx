import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IDetailMainContainerProps } from "./interface";

const DetailMainContainer: FunctionComponent<IDetailMainContainerProps> = (
  {
    detailBody
  }
) => (
  <div className={styles.mainContainer}>
    <div className={styles.detailContainer}>
      {detailBody}
    </div>
  </div>
);

export { DetailMainContainer };
