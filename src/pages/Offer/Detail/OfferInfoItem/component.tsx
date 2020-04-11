import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const OfferInfoItem: FunctionComponent<IOfferInfoItemProps> = (
  {
    title,
    className,
    children
  }) => (
  <div className={classNames(styles.item, className)}>
    <div className={styles.title}>{title}</div>
    {children}
  </div>
);

interface IOfferInfoItemProps {
  className?: string;
  title: string;
}

export { OfferInfoItem };
