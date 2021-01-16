import React, { FunctionComponent } from "react";
import { Selector } from "$components/Selector";
import { AdditionalOptions } from "$components/Selector/interfaces";
import { ApplicantType, targetApplicantTypeEnumValues } from "$interfaces/Applicant";

export const ApplicantTypeSelectorContainer: FunctionComponent<IContainerProps> = ({
  ...props
}) => (
  <Selector<ApplicantType, ITranslations>
    {...props}
    options={targetApplicantTypeEnumValues}
    translationGroup="applicantTypeSelector"
    getTitle={translations => translations.title}
    getLabel={(translations, option) => translations[option]}
  />
);

interface ITranslations {
  title: string;
  graduate: string;
  student: string;
  both: string;
  indeterminate: string;
}

interface IContainerProps {
  mandatory?: boolean;
  name: string;
  label?: string;
  className?: string;
  excludedOptions?: ApplicantType[];
  additionalOptions?: AdditionalOptions[];
}
