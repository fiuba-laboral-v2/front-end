import React from "react";
import { List } from "./component";
import { IListContainerProps } from "./interface";

export const ListContainer = <T, >({ children, ...props }: IListContainerProps<T>) =>
  <List {...props}>{children}</List>;
