import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Button from "../Button";
import { IListProps } from "./interface";

export const List = <T, >(
  {
    list,
    children,
    className,
    fetchMore,
    shouldFetchMore,
    translations
  }: IListProps<T>
) => <>
  <div className={classNames(styles.list, className)}>
    {list.map(children)}
  </div>
  {
    fetchMore && shouldFetchMore && translations &&
    <div className={styles.fetchMore}>
        <Button className={"primary"} onClick={fetchMore}>
          {translations.fetchMore}
        </Button>
    </div>
  }
</>;
