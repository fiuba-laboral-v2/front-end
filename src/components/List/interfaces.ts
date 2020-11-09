import { ReactNode } from "react";

export interface IListProps<ListItem> {
  list: ListItem[];
  className?: string;
  fetchMoreClassName?: string;
  children: (item: ListItem) => ReactNode;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  emptyListComponent?: ReactNode;
}
