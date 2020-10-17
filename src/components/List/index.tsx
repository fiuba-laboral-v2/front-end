import React from "react";
import classNames from "classnames";
import { IListProps } from "./interface";
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
  emptyListComponent,
  withHeading = false
}: IListProps<ListItem>) => (
  <>
    {list.length > 0 && (
      <div className={classNames(styles.list, className)}>{list.map(item => children(item))}</div>
    )}
    {list.length === 0 && (
      <div className={classNames(styles.emptyList, { [styles.withHeading]: withHeading })}>
        {emptyListComponent}
      </div>
    )}
    <PaginationButton
      shouldFetchMore={shouldFetchMore}
      fetchMore={fetchMore}
      className={fetchMoreClassName}
      loading={loading}
    />
  </>
);
