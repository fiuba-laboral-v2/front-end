import React, { Fragment, FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Description: FunctionComponent<IDetailDescriptionProps> = (
  {
    className,
    children
  }
) => {
  if (!children) return <Fragment/>;

  return (
    <p className={classNames(styles.description, className)}>{children}</p>
  );
};

interface IDetailDescriptionProps {
  className?: string;
}
