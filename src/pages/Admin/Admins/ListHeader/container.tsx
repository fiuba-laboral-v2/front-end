import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminAdminListHeader");
  return <>{translations && <ListHeader translations={translations} />}</>;
};

export interface ITranslations {
  name: string;
  dni: string;
  email: string;
  secretary: string;
  createdAt: string;
  status: string;
  actions: string;
}
