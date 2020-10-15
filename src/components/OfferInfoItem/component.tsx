import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

const OfferInfoItem: FunctionComponent<IOfferInfoItemProps> = ({ title, className, children }) => (
  <div className={classNames(styles.item, className)}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

interface IOfferInfoItemProps {
  className?: string;
  title: string;
}

export { OfferInfoItem };
