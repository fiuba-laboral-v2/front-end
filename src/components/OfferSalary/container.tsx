import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferSalary } from "./component";
import { IOfferSalaryContainerProps, IOfferSalaryTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";

const OfferSalaryContainer: FunctionComponent<IOfferSalaryContainerProps> = (
  {
    offer,
    className
  }
) => {
  const translations = useTranslations<IOfferSalaryTranslations>("offerSalary");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;

  return (
    <OfferSalary
      className={className}
      translations={translations.data}
      offer={offer}
    />
  );
};

export { OfferSalaryContainer };
