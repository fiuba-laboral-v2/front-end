import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IListProps<T> {
  list: T[];
  className?: string;
  children(args: T): ReactNode;
}

export type IList<T = any> = React.FC<IListProps<T>>;

const List: IList = (
  {
    list,
    children,
    className
  }
) => (
  <div className={classNames(styles.list, className)}>
    {list.map(children)}
  </div>
);

export { List };
