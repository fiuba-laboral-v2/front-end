import React, { FunctionComponent } from "react";

import { useExtensionOfferDuration, useGraduadosOfferDuration, useTranslations } from "$hooks";

import { InfoMessage } from "./component";
import { IInfoMessageContainerProps, ITranslations } from "./interfaces";
import { interpolateValues } from "$models/interpolateValues";

export const InfoMessageContainer: FunctionComponent<IInfoMessageContainerProps> = ({
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
