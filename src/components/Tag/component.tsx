import React, { FunctionComponent } from "react";
import { ITagProps } from "./interface";
import styles from "./styles.module.scss";

const Tag: FunctionComponent<ITagProps> = ({ name }) => (
  <div className={styles.tag}>{name}</div>
);

export { Tag };
