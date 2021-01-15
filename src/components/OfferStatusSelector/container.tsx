import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferStatusSelector } from "./component";
import { IContainerProps, ITranslations, AdditionalOptions } from "./interfaces";
import { OfferStatus, offerStatusEnumValues } from "$interfaces/Offer";

export const OfferStatusSelectorContainer: FunctionComponent<IContainerProps> = ({
  target,
  additionalOptions = [],
  ...props
}) => {
  const translations = useTranslations<ITranslations>("offerStatusSelector");
  const title = target === "students" ? translations?.studentsTitle : translations?.graduatesTitle;
  if (!translations || !title) return <Fragment />;
  let visibleOptions: Array<OfferStatus | AdditionalOptions> = [];
  visibleOptions = [...offerStatusEnumValues, ...additionalOptions];
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <OfferStatusSelector title={title} {...props} options={options} />;
};
