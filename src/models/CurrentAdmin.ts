import { IUser } from "$interfaces/User";
import { Secretary } from "$interfaces/Secretary";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType, IApplicant } from "$interfaces/Applicant";
import { IJobApplication } from "$interfaces/JobApplication";

export type TCurrentAdminAttributes = {
  user: Pick<IUser, "uuid">;
  secretary: Secretary;
};

export const CurrentAdmin = ({
  secretary,
  ...attributes
}: TCurrentAdminAttributes): TCurrentAdmin => {
  const currentAdmin = {
    ...attributes,
    secretary,
    isGraduados: () => secretary === Secretary.graduados,
    isExtension: () => secretary === Secretary.extension,
    canModerateOffer: (offer: IOffer) => {
      if (offer.isTargetingBoth()) return true;
      const targetMatches =
        {
          [Secretary.graduados]: ApplicantType.graduate,
          [Secretary.extension]: ApplicantType.student
        }[secretary] === offer.targetApplicantType;

      return targetMatches && offer.isFromApprovedCompany();
    },
    canModerateJobApplication: (jobApplication: IJobApplication) => {
      return (
        currentAdmin.canModerateApplicant(jobApplication.applicant) &&
        jobApplication.hasAnApprovedApplicant()
      );
    },
    canModerateApplicant: (applicant: IApplicant) => {
      const isGraduate = applicant.careers.map(career => career.isGraduate).includes(true);
      return (
        {
          [Secretary.graduados]: true,
          [Secretary.extension]: false
        }[secretary] === isGraduate
      );
    }
  } as TCurrentAdmin;

  return currentAdmin;
};

export type TCurrentAdmin = TCurrentAdminAttributes & {
  isGraduados: () => boolean;
  isExtension: () => boolean;
  canModerateOffer: (offer: IOffer) => boolean;
  canModerateApplicant: (applicant: IApplicant) => boolean;
  canModerateJobApplication: (jobApplication: IJobApplication) => boolean;
};
