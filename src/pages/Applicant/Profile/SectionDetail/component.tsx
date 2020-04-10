import React, { FunctionComponent } from "react";
import { ISectionDetailProps } from "./interface";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";

const SectionDetail: FunctionComponent<ISectionDetailProps> = (
  {
    title,
    text
  }) => {
  if (!text) return null;

  return (
    <div className={styles.section}>
      <Subtitle>{title}</Subtitle>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export { SectionDetail };
