import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const ApplyFiltersTitle: FunctionComponent<IApplyFiltersTitleProps> = ({
  children,
  className
}) => <h3 className={classNames(styles.title, className)}>{children}</h3>;

interface IApplyFiltersTitleProps {
  className?: string;
}
