import { ApolloQueryResult } from "@apollo/client";
import React, { ReactNode, Ref, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "../LoadingSpinner";

export const List = <ListItem, Result>(
  {
    list,
    children: mapListItemToReactNode,
    className,
    fetchMore,
    shouldFetchMore
  }: IListProps<ListItem, Result>
) => {
  const fetchMoreTrigger = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!fetchMore || !shouldFetchMore || !fetchMoreTrigger.current || loading) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      setLoading(true);
      fetchMore().then(() => setLoading(false));
      observer.disconnect();
    });
    observer.observe(fetchMoreTrigger.current);
  });

  return <>
    <div className={classNames(styles.list, className)}>
      {list.map((item, index) =>
        mapListItemToReactNode(index === list.length - 1 ? fetchMoreTrigger : undefined, item)
      )}
    </div>
    {loading && <LoadingSpinner/>}
  </>;
};

export interface IListProps<ListItem, Result> {
  fetchMore?: () => Promise<ApolloQueryResult<Result> | undefined>;
  shouldFetchMore?: boolean;
  list: ListItem[];
  className?: string;
  children: (ref: Ref<HTMLDivElement> | undefined, item: ListItem) => ReactNode;
}
