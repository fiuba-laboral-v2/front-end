import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ApplicantTypeSelector } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { targetApplicantTypeEnumValues } from "$interfaces/Applicant";
import { difference } from "lodash";

export const ApplicantTypeSelectorContainer: FunctionComponent<IContainerProps> = ({
  excludedOptions,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("targetApplicantTypeSelector");
  if (!translations) return <Fragment />;
  const visibleOptions = difference(targetApplicantTypeEnumValues, excludedOptions || []);
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <ApplicantTypeSelector translations={translations} {...props} options={options} />;
};
