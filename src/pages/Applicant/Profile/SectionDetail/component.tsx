import React, { FunctionComponent } from "react";
import { ISectionDetailProps } from "./interface";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";

const SectionDetail: FunctionComponent<ISectionDetailProps> = (
  {
    title,
    text
  }) => (
  <div className={styles.section}>
    {title ? <Subtitle>{title}</Subtitle> : undefined}
    <p className={styles.text}>{text}</p>
  </div>
);

export { SectionDetail };
