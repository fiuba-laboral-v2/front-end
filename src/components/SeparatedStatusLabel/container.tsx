import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { SeparatedStatusLabel } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";

export const SeparatedStatusLabelContainer: FunctionComponent<IContainerProps> = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    ...props
  }
) => {
  const translations = useTranslations<ITranslations>("separatedStatusLabel");
  if (!translations) return <Fragment />;

  const buildTooltipLabel = (status: ApprovalStatus, secretary: Secretary) => {
    if (status === ApprovalStatus.approved) return `${translations.approved} ${secretary}`;
    if (status === ApprovalStatus.rejected) return `${translations.rejected} ${secretary}`;
    return `${translations.pending} ${secretary}`;
  };

  return <SeparatedStatusLabel
    {...props}
    extensionTooltipText={buildTooltipLabel(extensionApprovalStatus, Secretary.extension)}
    graduadosTooltipText={buildTooltipLabel(graduadosApprovalStatus, Secretary.graduados)}
    extensionApprovalStatus={extensionApprovalStatus}
    graduadosApprovalStatus={graduadosApprovalStatus}
    translations={translations}
  />;
};
