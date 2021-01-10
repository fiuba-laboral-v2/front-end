import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferStatusSelector } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { OfferStatus, offerStatusEnumValues } from "$interfaces/Offer";

export const OfferStatusSelectorContainer: FunctionComponent<IContainerProps> = ({
  withEmptyOption,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("offerStatusSelector");
  if (!translations) return <Fragment />;
  const visibleOptions = offerStatusEnumValues;
  if (withEmptyOption) visibleOptions.push("" as OfferStatus);
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <OfferStatusSelector translations={translations} {...props} options={options} />;
};
