import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Link } from "$components/Link";

export const Title: FunctionComponent<ITitleProps> = ({ className, children, link }) => {
  const child = <h2 className={classNames(styles.title, className)}>{children}</h2>;
  return link ? <Link to={link}>{child}</Link> : child;
};

interface ITitleProps {
  className?: string;
  link?: string;
}
