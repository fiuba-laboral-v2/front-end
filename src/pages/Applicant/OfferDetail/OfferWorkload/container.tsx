import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { OfferWorkload } from "./component";
import { IOfferWorkloadContainerProps, IOfferWorkloadTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferWorkloadContainer: FunctionComponent<IOfferWorkloadContainerProps> = (
  {
    offer,
    className
  }) => {
  const translations = useTranslations<IOfferWorkloadTranslations>("offerWorkload");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <OfferWorkload
      className={className}
      translations={translations.data}
      offer={offer}
    />
  );
};

export { OfferWorkloadContainer };
