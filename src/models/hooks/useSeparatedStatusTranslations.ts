import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { TargetApplicantType } from "../../interfaces/Offer";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const buildLabel = ({ secretary, status, translations }: IBuildLabel) => {
  const applicantType = getApplicantType(translations)[secretary];
  return {
    [ApprovalStatus.approved]: `${applicantType}: ${translations.approved}`,
    [ApprovalStatus.rejected]: `${applicantType}: ${translations.rejected}`,
    [ApprovalStatus.pending]: `${applicantType}: ${translations.pending}`
  }[status];
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
