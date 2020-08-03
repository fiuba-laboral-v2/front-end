import React from "react";
import { List } from "./component";
import { IListContainerProps, IListTranslations } from "./interface";
import { useTranslations } from "$hooks/queries";

export const ListContainer = <T, >({ children, ...props }: IListContainerProps<T>) => {
  const translations = useTranslations<IListTranslations>("list");
  return <List translations={translations} {...props}>{children}</List>;
};
