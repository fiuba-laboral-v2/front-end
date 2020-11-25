import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { ApplicantType } from "$interfaces/Applicant";
import { TimeFormatter } from "$models/TimeFormatter";
import moment from "moment";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const getExpirationDate = (expirationDateTime: IExpirationDateTime) => ({
  [Secretary.graduados]: expirationDateTime.graduatesExpirationDateTime,
  [Secretary.extension]: expirationDateTime.studentsExpirationDateTime
});

const hasExpirationDate = ({
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
  const secretaryExpirationDate = getExpirationDate(expirationDateTime)[secretary]!;
  const expirationDate =
    hasExpirationDate(expirationDateTime) && TimeFormatter.date(secretaryExpirationDate);

  const approvedOfferText = () => {
    const initialText = `${applicantType}: `;
    if (hasExpired(secretaryExpirationDate)) {
      return withStatusText ? `${initialText} ${translations.expired}` : initialText;
    }
    return withStatusText
      ? `${applicantType}: ${translations.approved} ${expirationDate}`
      : `${applicantType}:`;
  };
  return {
    [ApprovalStatus.approved]: approvedOfferText(),
    [ApprovalStatus.rejected]: withStatusText
      ? `${applicantType}: ${translations.rejected}`
      : `${applicantType}:`,
    [ApprovalStatus.pending]: withStatusText
      ? `${applicantType}: ${translations.pending}`
      : `${applicantType}:`
  }[status];
};

const hasExpired = (expirationDateTime?: string | null) => {
  if (!expirationDateTime) return false;
  return moment(expirationDateTime).format("YYYY-MM-DD") < moment(Date.now()).format("YYYY-MM-DD");
};

const getTooltipLabel = (
  secretary: Secretary,
  expirationDateTime: IExpirationDateTime,
  withStatusText: boolean,
  translations?: ITranslations
) => {
  const isEmptyOrRedundant =
    !translations || (withStatusText && hasExpirationDate(expirationDateTime));
  if (isEmptyOrRedundant) return "";
  const secretaryExpirationDate = getExpirationDate(expirationDateTime)[secretary]!;
  const expirationDate =
    hasExpirationDate(expirationDateTime) && TimeFormatter.date(secretaryExpirationDate);

  const approvedOfferText = () =>
    hasExpired(secretaryExpirationDate)
      ? `${translations!.expired}`
      : `${translations!.approved} ${expirationDate}`;

  const secretaryTranslation =
    secretary === Secretary.extension ? translations!.extension : translations!.graduados;
  return expirationDate
    ? approvedOfferText()
    : `${translations!.tooltipPrefix} ${secretaryTranslation}`;
};

export const useSeparatedStatusTranslations = ({
  extensionApprovalStatus,
  graduadosApprovalStatus,
  studentsExpirationDateTime,
  graduatesExpirationDateTime,
  targetApplicantType,
  withStatusText
}: IUseSeparatedStatus): IUseSeparatedStatusResponse => {
  const labelTranslations = useTranslations<ILabelTranslations>("separatedStatusLabel");
  const institutionsTranslations = useTranslations<IInstitutionsTranslations>("institutions");

  if (
    !extensionApprovalStatus ||
    !graduadosApprovalStatus ||
    !targetApplicantType ||
    !labelTranslations ||
    !institutionsTranslations
  ) {
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
        tooltipText: getTooltipLabel(
          Secretary.graduados,
          expirationDateTime,
          withStatusText,
          translations
        ),
        status: graduadosApprovalStatus,
        hasExpired: hasExpired(graduatesExpirationDateTime)
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
        tooltipText: getTooltipLabel(
          Secretary.extension,
          expirationDateTime,
          withStatusText,
          translations
        ),
        status: extensionApprovalStatus,
        hasExpired: hasExpired(studentsExpirationDateTime)
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
  extensionApprovalStatus?: ApprovalStatus;
  graduadosApprovalStatus?: ApprovalStatus;
  studentsExpirationDateTime?: string | null;
  graduatesExpirationDateTime?: string | null;
  targetApplicantType?: ApplicantType;
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
  expired: string;
  approved: string;
  rejected: string;
}

interface IInstitutionsTranslations {
  extension: string;
  graduados: string;
}

type ITranslations = ILabelTranslations & IInstitutionsTranslations;
