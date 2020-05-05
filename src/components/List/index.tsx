import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IListProps<T> {
  list: T[];
  className?: string;
  children(args: T): ReactNode;
}

const List = <T, >(
  {
    list,
    children,
    className
  }: IListProps<T>
) => (
  <div className={classNames(styles.list, className)}>
    {list.map(children)}
  </div>
);

export { List };
