import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { InfoMessage } from "./component";
import { IInfoMessageContainerProps, ITranslations } from "./interface";

export const InfoMessageContainer: FunctionComponent<IInfoMessageContainerProps> = ({
  className,
  translationGroupName
}) => {
  const translations = useTranslations<ITranslations>(translationGroupName);
  return (
    <>
      {translations?.message && (
        <InfoMessage className={className} message={translations.message} />
      )}
    </>
  );
};
