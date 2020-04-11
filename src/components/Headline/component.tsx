import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Headline: FunctionComponent<IDetailHeadlineProps> = (
  {
    headline,
    className
  }
) => (
  <h2 className={classNames(styles.detailHeadline, className)}>{headline}</h2>
);

interface IDetailHeadlineProps {
  headline: string;
  className?: string;
}


export { Headline };
