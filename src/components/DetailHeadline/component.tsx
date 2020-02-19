import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IDetailHeadlineProps } from "./interface";

const DetailHeadline: FunctionComponent<IDetailHeadlineProps> = (
  {
    headline
  }
) => (
  <h2 className={styles.detailHeadline}>{headline}</h2>
);

export { DetailHeadline };
