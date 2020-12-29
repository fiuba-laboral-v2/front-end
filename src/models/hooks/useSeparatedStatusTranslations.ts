import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { useTranslations } from "./queries";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType } from "$interfaces/Applicant";

const getApplicantType = (translations: ITranslations) => ({
  [Secretary.graduados]: translations.graduate,
  [Secretary.extension]: translations.student
});

const buildLabel = ({ secretary, offer, translations, withStatusText }: IBuildLabel) => {
  if (!translations) return "";

  const applicantType = getApplicantType(translations)[secretary];
  const expirationDate = offer.getExpirationDateFor(secretary)?.format("DD/MM");

  const buildLabelText = (translation: string) => {
    return withStatusText ? `${applicantType}: ${translation}` : `${applicantType}:`;
  };

  if (offer.hasExpiredFor(secretary)) return buildLabelText(translations.expired);
  if (offer.isApprovedFor(secretary)) {
    return buildLabelText(`${translations.approved} ${expirationDate}`);
  }
  if (offer.isRejectedFor(secretary)) return buildLabelText(translations.rejected);
  return buildLabelText(translations.pending);
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
  targetApplicantType,
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

  const showGraduates =
    offer.isTargetingGraduates() &&
    (targetApplicantType === undefined || targetApplicantType === ApplicantType.graduate);
  const showStudents =
    offer.isTargetingStudents() &&
    (targetApplicantType === undefined || targetApplicantType === ApplicantType.student);

  return {
    ...(showGraduates && {
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
    ...(showStudents && {
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
