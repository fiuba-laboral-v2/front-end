import React, { FunctionComponent } from "react";
import { ISectionDetailProps } from "./interface";
import { DetailByLine } from "$components/Detail/DetailByLine";
import styles from "./styles.module.scss";

const SectionDetail: FunctionComponent<ISectionDetailProps> = (
  {
    title,
    text
  }) => (
    <>
      <DetailByLine byLine={title}/>
      <p className={styles.text}>{text}</p>
    </>
);

export { SectionDetail };
