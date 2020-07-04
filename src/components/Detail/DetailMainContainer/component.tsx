import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

const DetailMainContainer: FunctionComponent<IDetailMainContainerProps> = (
  { className, children }
) => (
  <div className={classNames(styles.mainContainer, className)}>
    <div className={styles.detailContainer}>
      {children}
    </div>
  </div>
);

interface IDetailMainContainerProps {
  className?: string;
}

export { DetailMainContainer };
