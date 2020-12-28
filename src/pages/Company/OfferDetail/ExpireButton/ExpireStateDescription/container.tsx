import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IExpireStateDescriptionContainerProps, ITranslations } from "./interface";
import { OfferStateDescription } from "../../OfferStateDescription";

export const ExpireStateDescriptionContainer: FunctionComponent<IExpireStateDescriptionContainerProps> = ({
  canExpireForStudents,
  canExpireForGraduates,
  isModal
}) => {
  const translations = useTranslations<ITranslations>("offerExpireFutureStateMessage");
  let firstLine;
  let secondLine;

  if (canExpireForStudents && translations) {
    firstLine = translations.forStudents;
  }

  if (canExpireForGraduates && translations) {
    secondLine = translations?.forGraduates;
  }

  const title = translations?.title;

  return <OfferStateDescription {...{ title, firstLine, secondLine, isModal }} />;
};
