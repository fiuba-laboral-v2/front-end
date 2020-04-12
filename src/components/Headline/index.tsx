import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Headline: FunctionComponent<IHeadlineProps> = (
  {
    className,
    children
  }) => (
  <h1 className={classNames(styles.headlineContainer, className)}>
    {children}
  </h1>
);

interface IHeadlineProps {
  className: string;
}

export { Headline };
