import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ApplicantTypeSelector } from "./component";
import { AdditionalOptions, IContainerProps, ITranslations } from "./interfaces";
import { ApplicantType, targetApplicantTypeEnumValues } from "$interfaces/Applicant";
import { difference } from "lodash";

export const ApplicantTypeSelectorContainer: FunctionComponent<IContainerProps> = ({
  excludedOptions = [],
  additionalOptions = [],
  ...props
}) => {
  const translations = useTranslations<ITranslations>("applicantTypeSelector");
  if (!translations) return <Fragment />;
  let visibleOptions: Array<ApplicantType | AdditionalOptions> = [];
  visibleOptions = difference(targetApplicantTypeEnumValues, excludedOptions);
  visibleOptions = [...visibleOptions, ...additionalOptions];
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <ApplicantTypeSelector translations={translations} {...props} options={options} />;
};
