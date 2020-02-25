import React, { FunctionComponent } from "react";
import { IDetailDescriptionProps } from "./interface";
import styles from "./styles.module.scss";

const DetailDescription: FunctionComponent<IDetailDescriptionProps> = (
  {
    description,
    onClick
  }
) => (
  <p className={styles.description} onClick={onClick} >{description}&#8203;</p>
);

export { DetailDescription };
