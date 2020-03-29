import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ISubtitleProps } from "./interface";

const Subtitle: FunctionComponent<ISubtitleProps> = (
  {
    className,
    children
  }) => (
  <h3 className={`${styles.subtitleContainer} ${className}`}>
    {children}
  </h3>
);

export { Subtitle };
