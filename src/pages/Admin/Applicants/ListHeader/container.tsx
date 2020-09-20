import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminApplicantListHeader");
  return (
    <>
      {translations && <ListHeader translations={translations} />}
    </>
  );
};

export interface ITranslations {
  names: string;
  padron: string;
  dni: string;
  studies: string;
  state: string;
}