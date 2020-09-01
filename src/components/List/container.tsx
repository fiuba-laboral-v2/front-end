import React from "react";
import { List } from "./component";
import { IListContainerProps, IListTranslations } from "./interface";
import { useTranslations } from "../../models/hooks/queries";

export const ListContainer = <ListItem, Result>(props: IListContainerProps<ListItem, Result>) => {
  const translations = useTranslations<IListTranslations>("list");
  return <List {...props} translations={translations || { fetchMore: "" }}/>;
};
