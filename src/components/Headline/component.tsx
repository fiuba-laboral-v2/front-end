import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Headline: FunctionComponent<IDetailHeadlineProps> = (
  {
    className,
    color = "light",
    children
  }
) => (
  <h2
    className={classNames(styles.detailHeadline, className, styles[color])}
  >
    {children}
  </h2>
);

interface IDetailHeadlineProps {
  className?: string;
  color?: "dark" | "light";

}

export { Headline };
