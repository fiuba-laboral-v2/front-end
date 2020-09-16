import React, { FunctionComponent, ReactNode } from "react";
import { ListHeader } from "./ListHeader";
import { ListContainer } from "./ListContainer";
import { ListContent } from "./ListContent";
import { ListableReactNodes, Listable } from "../interfaces";

export const List: FunctionComponent<IListProps> = (
  { headerClassName, listHeader, listContentItem, items, rowClassName }
) => (
  <ListContainer>
    <ListHeader className={headerClassName}>
      { listHeader }
    </ListHeader>
    <ListContent items={items} rowClassName={rowClassName}>
      { listContentItem }
    </ListContent>
  </ListContainer>
);

interface IListProps {
  listHeader: ReactNode;
  listContentItem: ListableReactNodes;
  items: Listable[];
  headerClassName: string;
  rowClassName: string;
}
