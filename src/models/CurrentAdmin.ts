import { IUser } from "$interfaces/User";
import { Secretary } from "$interfaces/Secretary";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType, IApplicant } from "$interfaces/Applicant";

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
      return (
        {
          [Secretary.graduados]: ApplicantType.graduate,
          [Secretary.extension]: ApplicantType.student
        }[secretary] === offer.targetApplicantType
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
};

export type TCurrentAdmin = TCurrentAdminAttributes & {
  isGraduados: () => boolean;
  isExtension: () => boolean;
  canModerateOffer: (offer: IOffer) => boolean;
  canModerateApplicant: (applicant: IApplicant) => boolean;
};
