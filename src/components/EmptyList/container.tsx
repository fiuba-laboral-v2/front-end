import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { IEmptyListContainerProps, ITranslations } from "./interfaces";
import { EmptyList } from "./component";

export const EmptyListContainer: FunctionComponent<IEmptyListContainerProps> = ({
  emptyTranslationSource,
  ...props
}) => {
  const translations = useTranslations<ITranslations>(emptyTranslationSource);
  return <>{translations && <EmptyList translations={translations} {...props} />}</>;
};
