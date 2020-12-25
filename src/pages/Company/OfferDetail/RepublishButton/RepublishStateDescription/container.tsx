import React, { FunctionComponent } from "react";

import { useExtensionOfferDuration, useGraduadosOfferDuration, useTranslations } from "$hooks";

import { IRepublishStateDescriptionContainerProps, ITranslations } from "./interface";
import { OfferStateDescription } from "../../OfferStateDescription";
import { TimeFormatter } from "$models/TimeFormatter";

export const RepublishStateDescriptionContainer: FunctionComponent<IRepublishStateDescriptionContainerProps> = ({
  canForStudents,
  canForGraduates
}) => {
  const translations = useTranslations<ITranslations>("offerRepublishFutureStateMessage");
  const studentsOfferDuration = useExtensionOfferDuration();
  const graduatesOfferDuration = useGraduadosOfferDuration();

  const message = [];
  if (canForStudents && studentsOfferDuration && translations) {
    message.push(
      `${translations?.forStudents} ${TimeFormatter.daysFromNowInDate(studentsOfferDuration)}`
    );
  }

  if (canForGraduates && graduatesOfferDuration && translations) {
    message.push(
      `${translations?.forGraduates} ${TimeFormatter.daysFromNowInDate(graduatesOfferDuration)}`
    );
  }

  return <OfferStateDescription {...{ message }} />;
};
