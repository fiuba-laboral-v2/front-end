import React, { Fragment } from "react";
import { useTranslations } from "$hooks";
import { Selector } from "./component";
import { IContainerProps, AdditionalOptions } from "./interfaces";
import { difference } from "lodash";

export const SelectorContainer = <Option, ITranslations extends object>({
  translationGroup,
  options,
  additionalOptions = [],
  excludedOptions = [],
  getTitle,
  getLabel,
  ...props
}: IContainerProps<Option, ITranslations>) => {
  const translations = useTranslations<ITranslations>(translationGroup);
  if (!translations) return <Fragment />;
  let visibleOptions: Array<Option | AdditionalOptions> = [];
  visibleOptions = difference(options, excludedOptions);
  visibleOptions = [...visibleOptions, ...additionalOptions];

  return (
    <Selector
      {...props}
      title={getTitle(translations)}
      options={visibleOptions.map(option => ({
        label: getLabel(translations, option),
        value: option
      }))}
    />
  );
};
