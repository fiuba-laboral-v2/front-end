import React, { FunctionComponent } from "react";

import { useExtensionOfferDuration, useGraduadosOfferDuration, useTranslations } from "$hooks";

import { InfoMessage } from "../InfoMessage/component";
import { IInfoMessageContainerProps, ITranslations } from "../InfoMessage/interfaces";
import { interpolateValues } from "$models/interpolateValues";

export const OfferInfoMessageContainer: FunctionComponent<IInfoMessageContainerProps> = ({
  className,
  translationGroupName
}) => {
  const translations = useTranslations<ITranslations>(translationGroupName);
  const studentsOfferDuration = useExtensionOfferDuration();
  const graduatesOfferDuration = useGraduadosOfferDuration();

  return (
    <>
      {translations?.message && studentsOfferDuration && graduatesOfferDuration && (
        <InfoMessage
          className={className}
          message={interpolateValues(translations?.message, {
            studentsOfferDuration: studentsOfferDuration.toString(),
            graduatesOfferDuration: graduatesOfferDuration.toString()
          })}
        />
      )}
    </>
  );
};
