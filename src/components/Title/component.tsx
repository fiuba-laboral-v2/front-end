import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { ITitleProps } from "./interface";

const Title: FunctionComponent<ITitleProps> = (
  {
    title,
    subtitle
  }
) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <Subtitle subtitle={subtitle} />
  </div>
);

export { Title };
