import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IEmptyListContainerProps, ITranslations } from "./interface";
import { EmptyList } from "./component";

export const EmptyListContainer: FunctionComponent<IEmptyListContainerProps> = ({
  emptyTranslationSource,
  onClick
}) => {
  const translations = useTranslations<ITranslations>(emptyTranslationSource);
  return (
    <>{translations && <EmptyList onClick={onClick} translations={translations}></EmptyList>}</>
  );
};
