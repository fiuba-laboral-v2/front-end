import React, { Fragment, FunctionComponent } from "react";
import { EditOffer } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations } from "./interface";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const EditOfferContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("editOffer");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <EditOffer translations={translations.data}/>;
};
