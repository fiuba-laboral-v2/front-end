import React, { FunctionComponent } from "react";
import { Selector } from "$components/Selector";
import { AdditionalOptions } from "$components/Selector/interfaces";
import { OfferStatus, offerStatusEnumValues } from "$interfaces/Offer";

export const OfferStatusSelectorContainer: FunctionComponent<IContainerProps> = ({
  target,
  ...props
}) => {
  return (
    <Selector<OfferStatus, ITranslations>
      {...props}
      options={offerStatusEnumValues}
      translationGroup="offerStatusSelector"
      getTitle={translations =>
        target === "students" ? translations?.studentsTitle : translations?.graduatesTitle
      }
      getLabel={(translations, option) => translations[option]}
    />
  );
};

interface IContainerProps {
  mandatory?: boolean;
  name: string;
  className?: string;
  target: "students" | "graduates";
  additionalOptions?: AdditionalOptions[];
}

interface ITranslations {
  studentsTitle: string;
  graduatesTitle: string;
  approved: string;
  rejected: string;
  pending: string;
  expired: string;
  indeterminate: string;
}
