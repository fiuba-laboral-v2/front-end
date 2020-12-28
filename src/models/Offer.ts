import { ApplicantType } from "$interfaces/Applicant";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IMyOfferAttributes, IOfferAttributes } from "$interfaces/Offer";
import { Secretary } from "$interfaces/Secretary";
import moment from "moment";

export const Offer = <T extends IOfferAttributes | IMyOfferAttributes = IOfferAttributes>(
  offerAttributes: T
) => {
  const offer = {
    ...offerAttributes,
    hasExpiredFor: (secretary: Secretary) => {
      const expirationDate = offer.getExpirationDateFor(secretary);
      if (!expirationDate || !offer.isApprovedFor(secretary)) return false;
      return expirationDate.format("YYYY-MM-DD") < moment(Date.now()).format("YYYY-MM-DD");
    },
    getExpirationDateFor: (secretary: Secretary) => {
      return {
        [Secretary.graduados]: !!offer.graduatesExpirationDateTime
          ? moment(offer.graduatesExpirationDateTime)
          : null,
        [Secretary.extension]: !!offer.studentsExpirationDateTime
          ? moment(offer.studentsExpirationDateTime)
          : null
      }[secretary];
    },
    getStatusFor: (secretary: Secretary) => {
      if (secretary === Secretary.extension) return offer.extensionApprovalStatus;
      if (secretary === Secretary.graduados) return offer.graduadosApprovalStatus;
    },
    isRejectedFor: (secretary: Secretary) => {
      const status = offer.getStatusFor(secretary);
      return status === ApprovalStatus.rejected;
    },
    isApprovedFor: (secretary: Secretary) => {
      const status = offer.getStatusFor(secretary);
      return status === ApprovalStatus.approved;
    },
    isTargetingOnlyStudents: () => offer.targetApplicantType === ApplicantType.student,
    isTargetingOnlyGraduates: () => offer.targetApplicantType === ApplicantType.graduate,
    isTargetingStudents: () => offer.isTargetingOnlyStudents() || offer.isTargetingBoth(),
    isTargetingGraduates: () => offer.isTargetingOnlyGraduates() || offer.isTargetingBoth(),
    isTargetingBoth: () => offer.targetApplicantType === ApplicantType.both,
    canExpireForStudents: () =>
      offer.isTargetingStudents() &&
      offer.isApprovedFor(Secretary.extension) &&
      !offer.hasExpiredFor(Secretary.extension) &&
      !offer.hasExpiredFor(Secretary.extension),
    canExpireForGraduates: () =>
      offer.isTargetingGraduates() &&
      offer.isApprovedFor(Secretary.graduados) &&
      !offer.isRejectedFor(Secretary.graduados) &&
      !offer.hasExpiredFor(Secretary.graduados),
    canRepublishForStudents: () =>
      offer.isTargetingStudents() &&
      offer.isApprovedFor(Secretary.extension) &&
      offer.hasExpiredFor(Secretary.extension),
    canRepublishForGraduates: () =>
      offer.isTargetingGraduates() &&
      offer.isApprovedFor(Secretary.graduados) &&
      offer.hasExpiredFor(Secretary.graduados)
  };
  return offer;
};
