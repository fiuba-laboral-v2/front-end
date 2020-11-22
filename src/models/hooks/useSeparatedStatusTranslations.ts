import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { ApplicantType } from "$interfaces/Applicant";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const buildLabel = ({ secretary, status, translations, withStatusText }: IBuildLabel) => {
  if (!translations) return "";

  const applicantType = getApplicantType(translations)[secretary];
  return {
    [ApprovalStatus.approved]: withStatusText
      ? `${applicantType}: ${translations.approved}`
      : `${applicantType}:`,
    [ApprovalStatus.rejected]: withStatusText
      ? `${applicantType}: ${translations.rejected}`
      : `${applicantType}:`,
    [ApprovalStatus.pending]: withStatusText
      ? `${applicantType}: ${translations.pending}`
      : `${applicantType}:`
  }[status];
};

const getTooltipLabel = (secretary: Secretary, translations?: ITranslations) => {
  if (!translations) return "";

  const secretaryTranslation =
    secretary === Secretary.extension ? translations.extension : translations.graduados;
  return `${translations.tooltipPrefix} ${secretaryTranslation}`;
};

export const useSeparatedStatusTranslations = ({
  extensionApprovalStatus,
  graduadosApprovalStatus,
  targetApplicantType,
  withStatusText
}: IUseSeparatedStatus): IUseSeparatedStatusResponse => {
  const labelTranslations = useTranslations<ILabelTranslations>("separatedStatusLabel");
  const institutionsTranslations = useTranslations<IInstitutionsTranslations>("institutions");

  if (!extensionApprovalStatus || !graduadosApprovalStatus || !targetApplicantType) {
    return { graduados: undefined, extension: undefined };
  }

  const targetsBoth = targetApplicantType === ApplicantType.both;
  const targetsStudents = targetsBoth || targetApplicantType === ApplicantType.student;
  const targetsGraduates = targetsBoth || targetApplicantType === ApplicantType.graduate;
  const translations = labelTranslations &&
    institutionsTranslations && {
      ...labelTranslations,
      ...institutionsTranslations
    };

  return {
    ...(targetsGraduates && {
      graduados: {
        text: buildLabel({
          status: graduadosApprovalStatus,
          secretary: Secretary.graduados,
          translations,
          withStatusText
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
          translations,
          withStatusText
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
  withStatusText: boolean;
}

interface IUseSeparatedStatus {
  extensionApprovalStatus?: ApprovalStatus;
  graduadosApprovalStatus?: ApprovalStatus;
  targetApplicantType?: ApplicantType;
  withStatusText: boolean;
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

interface ILabelTranslations {
  tooltipPrefix: string;
  graduate: string;
  student: string;
  pending: string;
  approved: string;
  rejected: string;
}

interface IInstitutionsTranslations {
  extension: string;
  graduados: string;
}

type ITranslations = ILabelTranslations & IInstitutionsTranslations;
