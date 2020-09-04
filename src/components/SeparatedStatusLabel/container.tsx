import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { SeparatedStatusLabel } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { TargetApplicantType } from "$interfaces/Offer";
import { Secretary } from "$interfaces/Secretary";
import { capitalize } from "lodash";

export const SeparatedStatusLabelContainer: FunctionComponent<IContainerProps> = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    targetApplicantType,
    ...props
  }
) => {
  const translations = useTranslations<ITranslations>("separatedStatusLabel");
  if (!translations) return <Fragment />;

  const buildLabel = (status: ApprovalStatus, secretary: Secretary) => {
    let applicantType = "";
    if (secretary === Secretary.graduados) applicantType = translations.graduate;
    if (secretary === Secretary.extension) applicantType = translations.student;
    if (status === ApprovalStatus.approved) return `${translations.approved} ${applicantType}`;
    if (status === ApprovalStatus.rejected) return `${translations.rejected} ${applicantType}`;
    return `${capitalize(applicantType)}: ${translations.pending}`;
  };

  const targetsBoth = targetApplicantType === TargetApplicantType.both;
  const targetsStudents = targetsBoth || targetApplicantType === TargetApplicantType.student;
  const targetsGraduates = targetsBoth || targetApplicantType === TargetApplicantType.graduate;

  return <SeparatedStatusLabel
    {...props}
    extensionText={buildLabel(extensionApprovalStatus, Secretary.extension)}
    graduadosText={buildLabel(graduadosApprovalStatus, Secretary.graduados)}
    {...(targetsStudents && { extensionApprovalStatus: extensionApprovalStatus })}
    {...(targetsGraduates && { graduadosApprovalStatus: graduadosApprovalStatus })}
    translations={translations}
  />;
};
