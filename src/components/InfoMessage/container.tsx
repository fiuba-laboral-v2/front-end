import React, { FunctionComponent } from "react";

import {
  useGetExtensionOfferDuration,
  useGetGraduadosOfferDuration,
  useTranslations
} from "$hooks";

import { InfoMessage } from "./component";
import { IInfoMessageContainerProps, ITranslations } from "./interfaces";

export const InfoMessageContainer: FunctionComponent<IInfoMessageContainerProps> = ({
  className,
  translationGroupName
}) => {
  const translations = useTranslations<ITranslations>(translationGroupName);
  const extensionOfferDuration = useGetExtensionOfferDuration();
  const graduadosOfferDuration = useGetGraduadosOfferDuration();

  const interpolateValuesInMessage = ({
    message,
    studentsOfferDuration,
    graduatesOfferDuration
  }: {
    message: string;
    studentsOfferDuration: number;
    graduatesOfferDuration: number;
  }) => {
    const tmp = message.replace("%{alumnosDuration}", studentsOfferDuration.toString());
    return tmp.replace("%{graduadosDuration}", graduatesOfferDuration.toString());
  };

  return (
    <>
      {translations?.message && extensionOfferDuration && graduadosOfferDuration && (
        <InfoMessage
          className={className}
          message={interpolateValuesInMessage({
            message: translations.message,
            studentsOfferDuration: extensionOfferDuration,
            graduatesOfferDuration: graduadosOfferDuration
          })}
        />
      )}
    </>
  );
};
