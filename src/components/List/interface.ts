import { ReactNode } from "react";

export interface IListContainerProps<T> {
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  list: T[];
  className?: string;

  children(args: T): ReactNode;
}

export interface IListProps<T> extends IListContainerProps<T> {
  translations?: IListTranslations;
}

export interface IListTranslations {
  fetchMore: string;
}
