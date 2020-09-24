import { Listable, ListableReactNodes } from "../../interfaces";

export interface IListContentProps {
  items: Listable[];
  rowClassName: string;
  children: ListableReactNodes;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
