import React, { FunctionComponent, ReactNode } from "react";
import { ListHeader } from "./ListHeader";
import { ListContainer } from "./ListContainer";
import { ListContent } from "./ListContent";
import { ListableReactNodes, Listable } from "../interfaces";

export const List: FunctionComponent<IListProps> = ({
  className,
  headerClassName,
  listHeader,
  listContentItem,
  items,
  rowClassName,
  fetchMore,
  shouldFetchMore,
  loading
}) => (
  <ListContainer className={className}>
    <ListHeader className={headerClassName}>{listHeader}</ListHeader>
    <ListContent
      items={items}
      rowClassName={rowClassName}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
    >
      {listContentItem}
    </ListContent>
  </ListContainer>
);

interface IListProps {
  listHeader: ReactNode;
  listContentItem: ListableReactNodes;
  items: Listable[];
  className?: string;
  headerClassName: string;
  rowClassName: string;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
