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
  loading
}: IListProps<ListItem>) => (
  <>
    <div className={classNames(styles.list, className)}>{list.map(item => children(item))}</div>
    <PaginationButton
      shouldFetchMore={shouldFetchMore}
      fetchMore={fetchMore}
      className={fetchMoreClassName}
      loading={loading}
    />
  </>
);
