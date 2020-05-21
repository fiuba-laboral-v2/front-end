import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferWorkload } from "./component";
import { IOfferWorkloadContainerProps, IOfferWorkloadTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";

const OfferWorkloadContainer: FunctionComponent<IOfferWorkloadContainerProps> = (
  {
    offer,
    className
  }) => {
  const translations = useTranslations<IOfferWorkloadTranslations>("offerWorkload");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  return (
    <OfferWorkload
      className={className}
      translations={translations.data}
      offer={offer}
    />
  );
};

export { OfferWorkloadContainer };
