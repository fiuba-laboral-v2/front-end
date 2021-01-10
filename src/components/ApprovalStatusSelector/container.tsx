import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ApprovalStatusSelector } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { approvalStatusEnumValues } from "$interfaces/ApprovalStatus";
import { difference } from "lodash";

export const ApprovalStatusSelectorContainer: FunctionComponent<IContainerProps> = ({
  excludedOptions,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("approvalStatusSelector");
  if (!translations) return <Fragment />;
  const visibleOptions = difference(approvalStatusEnumValues, excludedOptions || []);
  const options = visibleOptions.map(option => ({
    label: translations[option],
    value: option
  }));
  return <ApprovalStatusSelector translations={translations} {...props} options={options} />;
};
