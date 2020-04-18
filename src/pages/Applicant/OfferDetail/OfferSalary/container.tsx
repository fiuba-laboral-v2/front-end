import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { OfferSalary } from "./component";
import { IOfferSalaryContainerProps, IOfferSalaryTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferSalaryContainer: FunctionComponent<IOfferSalaryContainerProps> = (
  {
    offer,
    className
  }
) => {
  const history = useHistory();
  const {
    translations,
    error
  } = useTranslations<IOfferSalaryTranslations>("offerSalary");

  if (error) history.push(RoutesBuilder.notFound);

  return (
    <OfferSalary
      className={className}
      translations={translations!}
      offer={offer}
    />
  );
};

export { OfferSalaryContainer };
