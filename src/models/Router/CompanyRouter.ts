import { ICurrentCompany } from "../CurrentCompany";
import { RoutesBuilder } from "../RoutesBuilder";

export const CompanyRouter = {
  home: (currentCompany: ICurrentCompany) => {
    if (currentCompany.isApproved()) return RoutesBuilder.company.jobApplications();
    if (currentCompany.isPending()) return RoutesBuilder.company.editMyProfile();

    return RoutesBuilder.company.myProfile();
  }
};
