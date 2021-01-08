import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListContentItem } from "./component";
import { ICompany } from "$interfaces/Company";

export const ListContentItemContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("adminCompaniesContent");
  return <ListContentItem {...props} translations={translations} />;
};

interface IContainerProps {
  company: ICompany;
}

export interface ITranslations {
  yes: string;
  no: string;
}
