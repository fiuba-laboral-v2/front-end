import { RoutesBuilder } from "../RoutesBuilder";
import { TCurrentApplicant } from "../CurrentApplicant";

export const ApplicantRouter = {
  home: (currentApplicant: TCurrentApplicant) => {
    if (currentApplicant.isApproved()) return RoutesBuilder.applicant.offerList();
    if (currentApplicant.isPending()) return RoutesBuilder.applicant.editMyProfile();

    return RoutesBuilder.applicant.myProfile();
  }
};
