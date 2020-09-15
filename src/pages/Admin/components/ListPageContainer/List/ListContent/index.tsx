import React, { FunctionComponent, ReactNode } from "react";
import { Row } from "./Row";
import { Listable, ListableReactNodes } from "../../interfaces";

export const ListContent: FunctionComponent<IListContent> = ({ items, rowClassName, children }) => (
  <Row items={items} className={rowClassName}>
    { children as (item: Listable) => ReactNode }
  </Row>
);

interface IListContent {
  items: Listable[];
  rowClassName: string;
  children: ListableReactNodes;
}
