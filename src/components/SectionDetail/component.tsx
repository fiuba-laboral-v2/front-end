import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const SectionDetail: FunctionComponent<ISectionDetailProps> = ({
  title,
  text,
  className
}) => (
  <div className={classNames(styles.section, className)}>
    <Subtitle>{title}</Subtitle>
    <p className={styles.text}>{text}</p>
  </div>
);

interface ISectionDetailProps {
  title: string;
  text: string;
  className?: string;
}
