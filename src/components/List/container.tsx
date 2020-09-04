import React from "react";
import { List } from "./component";
import { IListContainerProps, IListTranslations } from "./interface";
import { useTranslations } from "../../models/hooks/queries";

export const ListContainer = <ListItem, >(props: IListContainerProps<ListItem>) => {
  const translations = useTranslations<IListTranslations>("list");
  return <List {...props} translations={translations || { fetchMore: "" }}/>;
};
