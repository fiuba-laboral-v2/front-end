import React from "react";
import { ListContent } from "./component";
import { IListContentContainerProps, IListContentTranslations } from "./interface";
import { useTranslations } from "$hooks";

export const ListContentContainer = (props: IListContentContainerProps) => {
  const translations = useTranslations<IListContentTranslations>("list");
  return <ListContent {...props} translations={translations || { fetchMore: "" }}/>;
};
