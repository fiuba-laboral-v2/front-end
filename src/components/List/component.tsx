import React, { ReactNode, Ref } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "../LoadingSpinner";

export const List = <ListItem, >(
  {
    list,
    className,
    mapListItemToReactNode,
    fetchMoreTrigger,
    loading
  }: IListProps<ListItem>
) =>
  <>
    <div className={classNames(styles.list, className)}>
      {list.map((item, index) =>
        mapListItemToReactNode(index === list.length - 1 ? fetchMoreTrigger : undefined, item)
      )}
    </div>
    {loading && <LoadingSpinner/>}
  </>;

interface IListProps<ListItem> {
  list: ListItem[];
  className?: string;
  mapListItemToReactNode: (ref: Ref<HTMLDivElement> | undefined, item: ListItem) => ReactNode;
  fetchMoreTrigger: Ref<HTMLDivElement>;
  loading: boolean;
}
