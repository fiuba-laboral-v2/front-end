import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { IOffer } from "$interfaces/Offer";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const buildLabel = ({ secretary, offer, translations, withStatusText }: IBuildLabel) => {
  if (!translations) return "";

  const applicantType = getApplicantType(translations)[secretary];
  const expirationDate = offer.getExpirationDateFor(secretary)?.format("DD/MM");

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

const getTooltipLabel = (
  secretary: Secretary,
  offer: IOffer,
  withStatusText: boolean,
  translations?: ITranslations
) => {
  const expirationDate = offer.getExpirationDateFor(secretary)?.format("DD/MM");
  const isEmptyOrRedundant = !translations || (withStatusText && expirationDate);
  if (isEmptyOrRedundant) return "";

  const approvedOfferText = () =>
    offer.hasExpiredFor(secretary)
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

  const translations = labelTranslations &&
    institutionsTranslations && {
      ...labelTranslations,
      ...institutionsTranslations
    };

  return {
    ...(offer.isTargetingGraduates() && {
      graduados: {
        text: buildLabel({
          offer,
          secretary: Secretary.graduados,
          translations,
          withStatusText
        }),
        tooltipText: getTooltipLabel(Secretary.graduados, offer, withStatusText, translations),
        status: offer.graduadosApprovalStatus,
        hasExpired: offer.hasExpiredFor(Secretary.graduados)
      }
    }),
    ...(offer.isTargetingStudents() && {
      extension: {
        text: buildLabel({
          offer,
          secretary: Secretary.extension,
          translations,
          withStatusText
        }),
        tooltipText: getTooltipLabel(Secretary.extension, offer, withStatusText, translations),
        status: offer.extensionApprovalStatus,
        hasExpired: offer.hasExpiredFor(Secretary.extension)
      }
    })
  };
};

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
