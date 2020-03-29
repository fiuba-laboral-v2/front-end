import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ISubtitleProps } from "./interface";

const Subtitle: FunctionComponent<ISubtitleProps> = (
  {
    subtitle,
    className
  }) => (
  <h3 className={`${styles.subtitleContainer} ${className}`}>{subtitle}</h3>
);

export { Subtitle };
