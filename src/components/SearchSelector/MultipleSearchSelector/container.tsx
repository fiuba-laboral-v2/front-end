import React from "react";
import { IMultipleSelectorContainerProps } from "./interface";
import { MultipleSearchSelector } from "./component";
import { useTranslations } from "$hooks/queries";

export const MultipleSearchSelectorContainer = <Option, Value>(
  props: IMultipleSelectorContainerProps<Option, Value>
) => {
  const translations = useTranslations<ITranslations>("multipleSearchSelector");
  return <MultipleSearchSelector helperText={translations?.helperText} {...props} />;
};

interface ITranslations {
  helperText: string;
}
