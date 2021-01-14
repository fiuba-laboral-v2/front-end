import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { ListContentItem } from "./component";
import {
  IListContentItemContainer,
  ISecretaryNamesTranslations,
  IAdminStatusTranslations
} from "./interfaces";

export const ListContentItemContainer: FunctionComponent<IListContentItemContainer> = ({
  admin
}) => {
  const secretaryNamesTranslation = useTranslations<ISecretaryNamesTranslations>("secretaryNames");
  const adminStatusTranslations = useTranslations<IAdminStatusTranslations>("adminStatus");
  let translations: (ISecretaryNamesTranslations & IAdminStatusTranslations) | undefined;
  if (secretaryNamesTranslation && adminStatusTranslations) {
    translations = { ...secretaryNamesTranslation, ...adminStatusTranslations };
  }

  return <ListContentItem admin={admin} translations={translations} />;
};
