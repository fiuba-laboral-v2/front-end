import { IUser } from "$interfaces/User";
import { Secretary } from "$interfaces/Secretary";
import { IOffer } from "$interfaces/Offer";
import { ApplicantType } from "$interfaces/Applicant";

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
    }
  } as TCurrentAdmin;
};

export type TCurrentAdmin = TCurrentAdminAttributes & {
  isGraduados: () => boolean;
  isExtension: () => boolean;
  canModerateOffer: (offer: IOffer) => boolean;
};
