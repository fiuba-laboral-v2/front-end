import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const List: FunctionComponent<IListProps> = (
  {
    headline,
    className
  }
) => (
  <h2 className={classNames(styles.detailHeadline, className)}>{headline}</h2>
);

interface IListProps {
  headline: string;
  className?: string;
}

export { List };
