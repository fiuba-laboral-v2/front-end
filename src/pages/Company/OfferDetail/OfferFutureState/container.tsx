import React, { FunctionComponent } from "react";

import { useExtensionOfferDuration, useGraduadosOfferDuration, useTranslations } from "$hooks";

import {
  IOfferFutureStateContainerProps,
  ITranslations,
  OfferFutureStateMessage
} from "./interface";
import { OfferFutureState } from "./component";
import { TimeFormatter } from "$models/TimeFormatter";

export const OfferFutureStateContainer: FunctionComponent<IOfferFutureStateContainerProps> = ({
  canForStudents,
  canForGraduates,
  offerFutureMessage
}) => {
  const translations = useTranslations<ITranslations>(offerFutureMessage);
  const studentsOfferDuration = useExtensionOfferDuration();
  const graduatesOfferDuration = useGraduadosOfferDuration();
  const message = [];
  if (canForStudents && studentsOfferDuration && translations) {
    const forStudentsMessage = {
      [OfferFutureStateMessage.republish]: `${
        translations?.forStudents
      } ${TimeFormatter.daysFromNowInDate(studentsOfferDuration)}`,
      [OfferFutureStateMessage.expire]: translations.forStudents
    }[offerFutureMessage];
    message.push(forStudentsMessage);
  }

  if (canForGraduates && graduatesOfferDuration && translations) {
    const forGraduatesMessage = {
      [OfferFutureStateMessage.republish]: `${
        translations?.forGraduates
      } ${TimeFormatter.daysFromNowInDate(graduatesOfferDuration)}`,
      [OfferFutureStateMessage.expire]: translations.forGraduates
    }[offerFutureMessage];
    message.push(forGraduatesMessage);
  }
  return <>{translations && <OfferFutureState {...{ message }} />}</>;
};
