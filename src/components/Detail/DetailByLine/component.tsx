import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IDetailByLineProps } from "./interface";

const DetailByLine: FunctionComponent<IDetailByLineProps> = (
  {
    byLine
  }
) => (
  <h3 className={styles.detailByline}>{byLine}</h3>
);

export { DetailByLine };
