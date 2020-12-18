import { ApplicantType } from "$interfaces/Applicant";
import { IPersistanceOffer } from "$interfaces/Offer";
import { Secretary } from "$interfaces/Secretary";
import moment from "moment";

export const Offer = (persistanceOffer: IPersistanceOffer) => {
  const offer = {
    ...persistanceOffer,
    hasExpiredFor: (secretary: Secretary) => {
      const expirationDate = offer.getExpirationDateFor(secretary);
      if (!expirationDate) return false;
      return moment(expirationDate).format("YYYY-MM-DD") < moment(Date.now()).format("YYYY-MM-DD");
    },
    getExpirationDateFor: (secretary: Secretary) => {
      return {
        [Secretary.graduados]: offer.graduatesExpirationDateTime,
        [Secretary.extension]: offer.studentsExpirationDateTime
      }[secretary];
    },
    isTargetToStudents: () => offer.targetApplicantType === ApplicantType.student,
    isTargetToGraduates: () => offer.targetApplicantType === ApplicantType.graduate,
    isTargetToBoth: () => offer.targetApplicantType === ApplicantType.both
  };
  return offer;
};
