import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ApprovalStatusSelector } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { ApprovalStatus, approvalStatusEnumValues } from "$interfaces/ApprovalStatus";

export const ApprovalStatusSelectorContainer: FunctionComponent<IContainerProps> = ({
  withEmptyOption,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("approvalStatusSelector");
  if (!translations) return <Fragment />;
  const visibleOptions = approvalStatusEnumValues;
  if (withEmptyOption) visibleOptions.push("" as ApprovalStatus);
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <ApprovalStatusSelector translations={translations} {...props} options={options} />;
};
