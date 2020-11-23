import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { ApplicantType } from "$interfaces/Applicant";
import { TimeFormatter } from "$models/TimeFormatter";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const getExpirationDate = (expirationDateTime: IExpirationDateTime) => ({
  [Secretary.graduados]: expirationDateTime.graduatesExpirationDateTime,
  [Secretary.extension]: expirationDateTime.studentsExpirationDateTime
});

const haveExpirationDate = ({
  studentsExpirationDateTime,
  graduatesExpirationDateTime
}: IExpirationDateTime) => studentsExpirationDateTime || graduatesExpirationDateTime;

const buildLabel = ({
  secretary,
  status,
  expirationDateTime,
  translations,
  withStatusText
}: IBuildLabel) => {
  if (!translations) return "";

  const applicantType = getApplicantType(translations)[secretary];
  const expirationDate =
    haveExpirationDate(expirationDateTime) &&
    TimeFormatter.date(getExpirationDate(expirationDateTime)[secretary]!);
  return {
    [ApprovalStatus.approved]: withStatusText
      ? `${applicantType}: ${translations.approved} ${expirationDate}`
      : `${applicantType}:`,
    [ApprovalStatus.rejected]: withStatusText
      ? `${applicantType}: ${translations.rejected}`
      : `${applicantType}:`,
    [ApprovalStatus.pending]: withStatusText
      ? `${applicantType}: ${translations.pending}`
      : `${applicantType}:`
  }[status];
};

const isExpired = (expirationDateTime?: string | null) => {
  if (!expirationDateTime) return false;
  return TimeFormatter.date(expirationDateTime) < TimeFormatter.today();
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
  studentsExpirationDateTime,
  graduatesExpirationDateTime,
  targetApplicantType,
  withStatusText
}: IUseSeparatedStatus): IUseSeparatedStatusResponse => {
  const targetsBoth = targetApplicantType === ApplicantType.both;
  const targetsStudents = targetsBoth || targetApplicantType === ApplicantType.student;
  const targetsGraduates = targetsBoth || targetApplicantType === ApplicantType.graduate;

  const labelTranslations = useTranslations<ILabelTranslations>("separatedStatusLabel");
  const institutionsTranslations = useTranslations<IInstitutionsTranslations>("institutions");

  const translations = labelTranslations &&
    institutionsTranslations && {
      ...labelTranslations,
      ...institutionsTranslations
    };

  const expirationDateTime = {
    studentsExpirationDateTime,
    graduatesExpirationDateTime
  };

  return {
    ...(targetsGraduates && {
      graduados: {
        text: buildLabel({
          status: graduadosApprovalStatus,
          secretary: Secretary.graduados,
          expirationDateTime,
          translations,
          withStatusText
        }),
        tooltipText: getTooltipLabel(Secretary.graduados, translations),
        status: graduadosApprovalStatus,
        hasExpired: isExpired(graduatesExpirationDateTime)
      }
    }),
    ...(targetsStudents && {
      extension: {
        text: buildLabel({
          status: extensionApprovalStatus,
          secretary: Secretary.extension,
          expirationDateTime,
          translations,
          withStatusText
        }),
        tooltipText: getTooltipLabel(Secretary.extension, translations),
        status: extensionApprovalStatus,
        hasExpired: isExpired(studentsExpirationDateTime)
      }
    })
  };
};

interface IExpirationDateTime {
  studentsExpirationDateTime?: string | null;
  graduatesExpirationDateTime?: string | null;
}

interface IBuildLabel {
  translations?: ITranslations;
  secretary: Secretary;
  status: ApprovalStatus;
  expirationDateTime: IExpirationDateTime;
  withStatusText: boolean;
}

interface IUseSeparatedStatus {
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  studentsExpirationDateTime?: string | null;
  graduatesExpirationDateTime?: string | null;
  targetApplicantType: ApplicantType;
  withStatusText: boolean;
}

interface IResponse {
  text: string;
  tooltipText: string;
  status: ApprovalStatus;
  hasExpired: boolean;
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
