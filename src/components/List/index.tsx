import React from "react";
import classNames from "classnames";
import { IListProps } from "./interfaces";
import { PaginationButton } from "../PaginationButton";

import styles from "./styles.module.scss";

export const List = <ListItem,>({
  list,
  className,
  children,
  shouldFetchMore,
  fetchMore,
  fetchMoreClassName,
  loading,
  emptyListComponent
}: IListProps<ListItem>) => (
  <>
    {list.length > 0 && (
      <div className={classNames(styles.list, className)}>{list.map(item => children(item))}</div>
    )}
    {list.length === 0 && (
      <div hidden={loading} className={styles.emptyList}>
        {emptyListComponent}
      </div>
    )}
    <PaginationButton
      listIsEmpty={list.length === 0}
      shouldFetchMore={shouldFetchMore}
      fetchMore={fetchMore}
      className={fetchMoreClassName}
      loading={loading}
    />
  </>
);
