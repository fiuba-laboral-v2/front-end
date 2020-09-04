import { ReactNode } from "react";

export interface IListTranslations {
  fetchMore: string;
}

export interface IListContainerProps<ListItem> {
  list: ListItem[];
  className?: string;
  fetchMoreClassName?: string;
  children: (item: ListItem) => ReactNode;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
export interface IListProps<ListItem> extends IListContainerProps<ListItem> {
  translations: IListTranslations;
}
