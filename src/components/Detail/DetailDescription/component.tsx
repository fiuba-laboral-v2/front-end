import React, { FunctionComponent } from "react";
import { IDetailDescriptionProps } from "./interface";
import styles from "./styles.module.scss";

const DetailDescription: FunctionComponent<IDetailDescriptionProps> = (
  {
    description
  }
) => (
  <p className={styles.description}>{description}</p>
);

export { DetailDescription };
