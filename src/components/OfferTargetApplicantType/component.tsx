import React, { FunctionComponent } from "react";
import { OfferInfoItem } from "$components/OfferInfoItem";

import { IComponentProps } from "./interfaces";

export const OfferTargetApplicantType: FunctionComponent<IComponentProps> = ({
  offer,
  translations,
  className
}) => (
  <OfferInfoItem className={className} title={translations.title}>
    <span> {translations[offer.targetApplicantType]} </span>
  </OfferInfoItem>
);
