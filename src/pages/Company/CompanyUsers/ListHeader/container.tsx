import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("companyUserListHeader");
  return <>{translations && <ListHeader translations={translations} />}</>;
};

export interface ITranslations {
  name: string;
  email: string;
  createdAt: string;
}
