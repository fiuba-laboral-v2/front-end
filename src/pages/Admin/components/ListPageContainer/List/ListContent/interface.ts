import { Listable, ListableReactNodes } from "../../interfaces";

export interface IListContentContainerProps {
  items: Listable[];
  rowClassName: string;
  children: ListableReactNodes;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}

export interface IListContentTranslations {
  fetchMore: string;
}

export interface IListContentProps extends IListContentContainerProps {
  translations: IListContentTranslations;
}
