import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IExpireStateDescriptionContainerProps, ITranslations } from "./interface";
import { OfferStateDescription } from "../../OfferStateDescription";

export const ExpireStateDescriptionContainer: FunctionComponent<IExpireStateDescriptionContainerProps> = ({
  canForStudents,
  canForGraduates
}) => {
  const translations = useTranslations<ITranslations>("offerExpireFutureStateMessage");

  const message = [];
  if (canForStudents && translations) {
    message.push(translations.forStudents);
  }

  if (canForGraduates && translations) {
    message.push(translations?.forGraduates);
  }

  return <OfferStateDescription {...{ message }} />;
};
