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
  {shouldFetchMore && <Button className={"secondary"} onClick={fetchMore}>Dame mas</Button>}
</>;

interface IListProps<T> {
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  list: T[];
  className?: string;
  children(args: T): ReactNode;
}
