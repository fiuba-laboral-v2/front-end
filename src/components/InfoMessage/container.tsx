import React from "react";

import { useTranslations } from "$hooks";

import { InfoMessage } from "./component";
import { IInfoMessageContainerProps, ITranslations } from "./interface";

export const InfoMessageContainer = ({
  className,
  translationName
}: IInfoMessageContainerProps) => {
  const translations = useTranslations<ITranslations>(translationName);
  return (
    <>
      {translations?.message && (
        <InfoMessage className={className} message={translations.message} />
      )}
    </>
  );
};
