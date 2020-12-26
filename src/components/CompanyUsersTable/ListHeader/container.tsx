import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const ListHeaderContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("companyUserListHeader");
  return <>{translations && <ListHeader translations={translations} {...props} />}</>;
};
