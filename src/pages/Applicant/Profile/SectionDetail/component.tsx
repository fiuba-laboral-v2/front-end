import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";

const SectionDetail: FunctionComponent<ISectionDetailProps> = (
  {
    title,
    text
  }) => (
  <div className={styles.section}>
    <Subtitle>{title}</Subtitle>
    <p className={styles.text}>{text}</p>
  </div>
);

interface ISectionDetailProps {
  title: string;
  text: string;
}

export { SectionDetail };
