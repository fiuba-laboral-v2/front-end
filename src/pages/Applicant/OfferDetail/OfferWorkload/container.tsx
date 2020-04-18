import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { OfferWorkload } from "./component";
import { IOfferWorkloadContainerProps, IOfferWorkloadTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferWorkloadContainer: FunctionComponent<IOfferWorkloadContainerProps> = (
  {
    offer,
    className
  }) => {
  const history = useHistory();
  const {
    translations,
    error
  } = useTranslations<IOfferWorkloadTranslations>("offerWorkload");

  if (error) history.push(RoutesBuilder.notFound);

  return (
    <OfferWorkload
      className={className}
      translations={translations!}
      offer={offer}
    />
  );
};

export { OfferWorkloadContainer };
