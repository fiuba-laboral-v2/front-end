import { ApolloQueryResult } from "@apollo/client";
import React, { ReactNode, Ref, useEffect, useRef, useState } from "react";
import { List } from "./component";

export const ListContainer = <ListItem, Result>(
  {
    list,
    children,
    className,
    fetchMore,
    shouldFetchMore
  }: IListContainerProps<ListItem, Result>
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

  return <List
    list={list}
    className={className}
    mapListItemToReactNode={children}
    fetchMoreTrigger={fetchMoreTrigger}
    loading={loading}
  />;
};

interface IListContainerProps<ListItem, Result> {
  fetchMore?: () => Promise<ApolloQueryResult<Result> | undefined>;
  shouldFetchMore?: boolean;
  list: ListItem[];
  className?: string;
  children: (ref: Ref<HTMLDivElement> | undefined, item: ListItem) => ReactNode;
}
