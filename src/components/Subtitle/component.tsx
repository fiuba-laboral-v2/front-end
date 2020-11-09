import React, { Fragment, FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ISubtitleProps } from "./interfaces";
import classNames from "classnames";

const Subtitle: FunctionComponent<ISubtitleProps> = ({ className, children }) => {
  if (!children) return <Fragment />;

  return <h3 className={classNames(styles.subtitleContainer, className)}>{children}</h3>;
};

export { Subtitle };
