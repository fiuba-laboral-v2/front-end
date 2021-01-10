import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferStatusSelector } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { OfferStatus, offerStatusEnumValues } from "$interfaces/Offer";

export const OfferStatusSelectorContainer: FunctionComponent<IContainerProps> = ({
  target,
  withEmptyOption,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("offerStatusSelector");
  const title = target === "students" ? translations?.studentsTitle : translations?.graduatesTitle;
  if (!translations || !title) return <Fragment />;
  let visibleOptions = offerStatusEnumValues;
  if (withEmptyOption) visibleOptions = [...visibleOptions, "" as OfferStatus];
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <OfferStatusSelector title={title} {...props} options={options} />;
};
