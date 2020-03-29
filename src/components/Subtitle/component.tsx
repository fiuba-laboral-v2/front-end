import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IDetailByLineProps } from "./interface";

const Subtitle: FunctionComponent<IDetailByLineProps> = (
  {
    subtitle,
    className
  }) => (
  <h3 className={`${styles.subtitleContainer} ${className}`}>{subtitle}</h3>
);

export { Subtitle };
