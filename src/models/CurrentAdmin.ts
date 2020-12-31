import { IUser } from "$interfaces/User";
import { Secretary } from "$interfaces/Secretary";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType, IApplicant } from "$interfaces/Applicant";
import { IJobApplication } from "$interfaces/JobApplication";
import { ApprovalStatus } from "../interfaces/ApprovalStatus";

export type TCurrentAdminAttributes = {
  user: Pick<IUser, "uuid">;
  secretary: Secretary;
};

export const CurrentAdmin = ({
  secretary,
  ...attributes
}: TCurrentAdminAttributes): TCurrentAdmin => {
  return {
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
      const hasAnApprovedApplicant =
        jobApplication.applicant.approvalStatus === ApprovalStatus.approved;
      const isFromApprovedCompany = jobApplication.offer().isFromApprovedCompany();
      const hasAnApprovedOffer = jobApplication.offer().isApprovedFor(secretary);
      return hasAnApprovedApplicant && isFromApprovedCompany && hasAnApprovedOffer;
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
};

export type TCurrentAdmin = TCurrentAdminAttributes & {
  isGraduados: () => boolean;
  isExtension: () => boolean;
  canModerateOffer: (offer: IOffer) => boolean;
  canModerateApplicant: (applicant: IApplicant) => boolean;
  canModerateJobApplication: (jobApplication: IJobApplication) => boolean;
};
