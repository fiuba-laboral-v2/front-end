import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { ApplicantType } from "$interfaces/Applicant";
import { TimeFormatter } from "$models/TimeFormatter";
import moment from "moment";
import { IOffer } from "$interfaces/Offer";

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

const buildLabel = ({ secretary, offer, translations, withStatusText }: IBuildLabel) => {
  if (!translations) return "";

  const applicantType = getApplicantType(translations)[secretary];
  const expirationDate = offer.getExpirationDateFor(secretary);
  // const expirationDate =
  //   hasExpirationDate(expirationDateTime) && TimeFormatter.date(secretaryExpirationDate);

  const approvedOfferText = () => {
    const initialText = `${applicantType}: `;
    if (offer.hasExpiredFor(secretary)) {
      return withStatusText ? `${initialText} ${translations.expired}` : initialText;
    }
    return withStatusText
      ? `${applicantType}: ${translations.approved} ${expirationDate}`
      : `${applicantType}:`;
  };
  if (offer.isApprovedFor(secretary)) return approvedOfferText();
  if (offer.isRejectedFor(secretary)) {
    return withStatusText ? `${applicantType}: ${translations.rejected}` : `${applicantType}:`;
  }
  return withStatusText ? `${applicantType}: ${translations.pending}` : `${applicantType}:`;
};

const hasExpired = (expirationDateTime?: string | null) => {
  if (!expirationDateTime) return false;
  return moment(expirationDateTime).format("YYYY-MM-DD") < moment(Date.now()).format("YYYY-MM-DD");
};

const getTooltipLabel = (
  secretary: Secretary,
  offer: IOffer,
  withStatusText: boolean,
  translations?: ITranslations
) => {
  const isEmptyOrRedundant =
    !translations || (withStatusText && offer.getExpirationDateFor(secretary));
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
  offer,
  withStatusText
}: IUseSeparatedStatus): IUseSeparatedStatusResponse => {
  const labelTranslations = useTranslations<ILabelTranslations>("separatedStatusLabel");
  const institutionsTranslations = useTranslations<IInstitutionsTranslations>("institutions");

  if (!offer || !labelTranslations || !institutionsTranslations) {
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
          offer,
          secretary: Secretary.graduados,
          translations,
          withStatusText
        }),
        tooltipText: getTooltipLabel(
          Secretary.graduados,
          expirationDateTime,
          withStatusText,
          translations
        ),
        status: offer.graduadosApprovalStatus,
        hasExpired: offer.hasExpiredFor(Secretary.graduados)
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
  offer: IOffer;
  withStatusText: boolean;
}

interface IUseSeparatedStatus {
  offer: IOffer;
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
