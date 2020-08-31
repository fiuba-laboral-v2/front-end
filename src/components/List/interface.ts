import { ReactNode } from "react";

export interface IListTranslations {
  fetchMore: string;
}

export interface IListContainerProps<ListItem, Result> {
  list: ListItem[];
  className?: string;
  fetchMoreClassName?: string;
  children: (item: ListItem) => ReactNode;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
export interface IListProps<ListItem, Result> extends IListContainerProps<ListItem, Result> {
  translations: IListTranslations;
}
