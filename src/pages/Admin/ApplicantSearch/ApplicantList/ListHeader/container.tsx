import React, { FunctionComponent, Fragment } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminApplicantListHeader");
  return (
    <Fragment>
      {translations && <ListHeader translations={translations} />}
    </Fragment>
  );
};

export interface ITranslations {
  [names: string]: string;
  padron: string;
  dni: string;
  studies: string;
  state: string;
}
