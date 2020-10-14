import React from "react";
import { PaginationButton } from "./component";
import { IPaginationButtonContainerProps, IListTranslations } from "./interface";
import { useTranslations } from "../../models/hooks/queries";

export const PaginationButtonContainer = (props: IPaginationButtonContainerProps) => {
  const translations = useTranslations<IListTranslations>("list");
  return <PaginationButton {...props} translations={translations || { fetchMore: "" }} />;
};
