import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Button from "../Button";

export const List = <T, >(
  {
    list,
    children,
    className,
    fetchMore,
    shouldFetchMore
  }: IListProps<T>
) => <>
  <div className={classNames(styles.list, className)}>
    {list.map(children)}
  </div>
  <div className={styles.fetchMore}>
    <Button className={"primary"} onClick={fetchMore} disabled={!shouldFetchMore}>
      {shouldFetchMore ? "Ver más" : "No hay más"}
    </Button>
  </div>
</>;

interface IListProps<T> {
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  list: T[];
  className?: string;
  children(args: T): ReactNode;
}
