import { ICurrentCompany } from "../CurrentCompany";
import { RoutesBuilder } from "../RoutesBuilder";
import { ICurrentApplicant } from "../CurrentApplicant";

export const ApplicantRouter = {
  home: (currentApplicant: ICurrentApplicant) => {
    if (currentApplicant.isApproved()) return RoutesBuilder.applicant.offerList();
    if (currentApplicant.isPending()) return RoutesBuilder.applicant.editMyProfile();

    return RoutesBuilder.applicant.myProfile();
  }
};
