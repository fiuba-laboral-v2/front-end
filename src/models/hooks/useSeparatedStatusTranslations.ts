import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { TargetApplicantType } from "../../interfaces/Offer";

const buildLabel = ({ secretary, status, translations }: IBuildLabel) => {
  let applicantType = "";
  if (secretary === Secretary.graduados) applicantType = translations.graduate;
  if (secretary === Secretary.extension) applicantType = translations.student;
  if (status === ApprovalStatus.approved) return `${applicantType}: ${translations.approved}`;
  if (status === ApprovalStatus.rejected) return `${applicantType}: ${translations.rejected}`;
  return `${applicantType}: ${translations.pending}`;
};

const getTooltipLabel = (secretary: Secretary, translations: ITranslations) => {
  if (secretary === Secretary.extension) return translations.extensionTooltip;
  return translations.graduadosTooltip;
};

export const useSeparatedStatusTranslations = (
  {
    extensionApprovalStatus,
    graduadosApprovalStatus,
    targetApplicantType
  }: IUseSeparatedStatus
): IUseSeparatedStatusResponse => {
  const targetsBoth = targetApplicantType === TargetApplicantType.both;
  const targetsStudents = targetsBoth || targetApplicantType === TargetApplicantType.student;
  const targetsGraduates = targetsBoth || targetApplicantType === TargetApplicantType.graduate;

  const translations = useTranslations<ITranslations>("separatedStatusLabel");
  if (!translations) {
    return {
      ...(targetsGraduates && {
        graduados: {
          text: "",
          tooltipText: "",
          status: graduadosApprovalStatus
        }
      }),
      ...(targetsStudents && {
        extension: {
          text: "",
          tooltipText: "",
          status: extensionApprovalStatus
        }
      })
    };
  }

  return {
    ...(targetsGraduates && {
      graduados: {
        text: buildLabel({
          status: graduadosApprovalStatus,
          secretary: Secretary.graduados,
          translations
        }),
        tooltipText: getTooltipLabel(Secretary.graduados, translations),
        status: graduadosApprovalStatus
      }
    }),
    ...(targetsStudents && {
      extension: {
        text: buildLabel({
          status: extensionApprovalStatus,
          secretary: Secretary.extension,
          translations
        }),
        tooltipText: getTooltipLabel(Secretary.extension, translations),
        status: extensionApprovalStatus
      }
    })
  };
};

interface IBuildLabel {
  translations: ITranslations;
  secretary: Secretary;
  status: ApprovalStatus;
}

interface IUseSeparatedStatus {
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  targetApplicantType: TargetApplicantType;
}

interface IResponse {
  text: string;
  tooltipText: string;
  status: ApprovalStatus;
}

interface IUseSeparatedStatusResponse {
  extension?: IResponse;
  graduados?: IResponse;
}

export interface ITranslations {
  extensionTooltip: string;
  graduadosTooltip: string;
  graduate: string;
  student: string;
  pending: string;
  approved: string;
  rejected: string;
}
