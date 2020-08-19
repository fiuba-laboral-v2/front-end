import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferTargetApplicantType } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const OfferTargetApplicantTypeContainer: FunctionComponent<IContainerProps> = (
  {
    offer,
    className
  }) => {
  const translations = useTranslations<ITranslations>("offerTargetApplicantType");
  if (!translations) return <Fragment/>;

  return (
    <OfferTargetApplicantType
      className={className}
      translations={translations}
      offer={offer}
    />
  );
};
