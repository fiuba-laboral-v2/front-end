import { TCurrentUser } from "../CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { CompanyRouter } from "./CompanyRouter";
import { ApplicantRouter } from "./ApplicantRouter";
import { SessionStorageRepository } from "$repositories";

export const Router = {
  home: (currentUser: TCurrentUser) => {
    const currentRole = SessionStorageRepository.getCurrentRole();
    if (currentRole.isCompanyRole()) return CompanyRouter.home(currentUser.company!);
    if (currentRole.isApplicantRole()) return ApplicantRouter.home(currentUser.applicant!);
    return RoutesBuilder.admin.home();
  }
};
