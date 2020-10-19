import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const AcceptanceCriteria: FunctionComponent<IComponentProps> = ({ className, text }) => (
  <p className={classNames(styles.acceptanceCriteria, className)}>{text}</p>
);

interface IComponentProps {
  className?: string;
  text: string;
}
