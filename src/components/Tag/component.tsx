import React, { FunctionComponent } from "react";
import { ITagProps } from "./interface";
import styles from "./styles.module.scss";

const Tag: FunctionComponent<ITagProps> = ({ name, className }) => (
  <div className={`${styles.tag} ${className}`}>{name}</div>
);

export { Tag };
