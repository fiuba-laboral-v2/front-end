import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { ListContentItem } from "./component";
import { IListContentItemContainer, ITranslations } from "./interface";

export const ListContentItemContainer: FunctionComponent<IListContentItemContainer> = ({
  admin
}) => {
  const translations = useTranslations<ITranslations>("secretaryNames");
  return <>{translations && <ListContentItem admin={admin} translations={translations} />}</>;
};
