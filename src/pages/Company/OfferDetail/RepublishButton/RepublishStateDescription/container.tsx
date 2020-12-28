import React, { FunctionComponent } from "react";

import { useExtensionOfferDuration, useGraduadosOfferDuration, useTranslations } from "$hooks";

import { IRepublishStateDescriptionContainerProps, ITranslations } from "./interface";
import { OfferStateDescription } from "../../OfferStateDescription";
import { TimeFormatter } from "$models/TimeFormatter";

export const RepublishStateDescriptionContainer: FunctionComponent<IRepublishStateDescriptionContainerProps> = ({
  canRepublishForStudents,
  canRepublishForGraduates,
  isModal
}) => {
  const translations = useTranslations<ITranslations>("offerRepublishFutureStateMessage");
  const studentsOfferDuration = useExtensionOfferDuration();
  const graduatesOfferDuration = useGraduadosOfferDuration();
  let firstLine;
  let secondLine;

  if (canRepublishForStudents && studentsOfferDuration && translations) {
    secondLine = `${translations?.forStudents} ${TimeFormatter.daysFromNowInDate(
      studentsOfferDuration
    )}`;
  }

  if (canRepublishForGraduates && graduatesOfferDuration && translations) {
    firstLine = `${translations?.forGraduates} ${TimeFormatter.daysFromNowInDate(
      graduatesOfferDuration
    )}`;
  }

  const title = translations?.title;

  return <OfferStateDescription {...{ title, firstLine, secondLine, isModal }} />;
};
