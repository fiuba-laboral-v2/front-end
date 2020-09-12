import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { ApplicantType } from "$interfaces/Applicant";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const buildLabel = ({ secretary, status, translations }: IBuildLabel) => {
  if (!translations) return "";

  const applicantType = getApplicantType(translations)[secretary];
  return {
    [ApprovalStatus.approved]: `${applicantType}: ${translations.approved}`,
    [ApprovalStatus.rejected]: `${applicantType}: ${translations.rejected}`,
    [ApprovalStatus.pending]: `${applicantType}: ${translations.pending}`
  }[status];
};

const getTooltipLabel = (secretary: Secretary, translations?: ITranslations) => {
  if (!translations) return "";

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
  const targetsBoth = targetApplicantType === ApplicantType.both;
  const targetsStudents = targetsBoth || targetApplicantType === ApplicantType.student;
  const targetsGraduates = targetsBoth || targetApplicantType === ApplicantType.graduate;

  const translations = useTranslations<ITranslations>("separatedStatusLabel");

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
  translations?: ITranslations;
  secretary: Secretary;
  status: ApprovalStatus;
}

interface IUseSeparatedStatus {
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  targetApplicantType: ApplicantType;
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
