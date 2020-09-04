import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "../LoadingSpinner";
import { Button } from "../Button";
import { IListProps } from "./interface";

export const List = <ListItem, >(
  {
    list,
    className,
    children,
    shouldFetchMore,
    fetchMore,
    fetchMoreClassName,
    translations,
    loading
  }: IListProps<ListItem>
) => (
  <>
    <div className={classNames(styles.list, className)}>
      {list.map(item => children(item))}
    </div>
    {
      loading &&
      <LoadingSpinner/>
    }
    {
      shouldFetchMore && fetchMore && !loading &&
      <Button
        kind="primary"
        onClick={fetchMore}
        className={classNames(styles.fetchMoreButton, fetchMoreClassName)}
      >
        {translations.fetchMore}
      </Button>
    }
  </>
);
