import React, { FunctionComponent } from "react";
import { ITagProps } from "./interface";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Tag: FunctionComponent<ITagProps> = ({ name, className }) => (
  <div className={classNames(styles.tag, className)}>{name}</div>
);

export { Tag };
