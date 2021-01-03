import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Role } from "$models/Role";
import { CurrentRole, SessionStorageRepository } from "$repositories";
import { CurrentUser } from "$models/CurrentUser";
import { Router } from "$models/Router";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Secretary } from "$interfaces/Secretary";

describe("Router", () => {
  const userAttributes = {
    email: "companyUser@company.com",
    name: "Eric",
    surname: "Clapton"
  };

  describe("Company", () => {
    const createCurrentCompanyUser = (approvalStatus: ApprovalStatus) => {
      const role = new Role(CurrentRole.Company);
      SessionStorageRepository.saveCurrentRole(role);
      return CurrentUser({
        ...userAttributes,
        company: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus
        }
      });
    };

    it("returns jobApplications route if status is approved", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
      expect(Router.home(currentCompany)).toEqual(RoutesBuilder.company.jobApplications());
    });

    it("returns editMyProfile route if status is pending", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
      expect(Router.home(currentCompany)).toEqual(RoutesBuilder.company.editMyProfile());
    });

    it("returns myProfile route if status is rejected", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(Router.home(currentCompany)).toEqual(RoutesBuilder.company.myProfile());
    });
  });

  describe("Applicant", () => {
    const createCurrentApplicantUser = (approvalStatus: ApprovalStatus) => {
      const role = new Role(CurrentRole.Applicant);
      SessionStorageRepository.saveCurrentRole(role);
      return CurrentUser({
        ...userAttributes,
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus
        }
      });
    };

    it("returns offerList route if status is approved", () => {
      const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
      expect(Router.home(currentApplicant)).toEqual(RoutesBuilder.applicant.offerList());
    });

    it("returns editMyProfile route if status is pending", () => {
      const currentApplicant = createCurrentApplicantUser(ApprovalStatus.pending);
      expect(Router.home(currentApplicant)).toEqual(RoutesBuilder.applicant.editMyProfile());
    });

    it("returns myProfile route if status is rejected", () => {
      const currentApplicant = createCurrentApplicantUser(ApprovalStatus.rejected);
      expect(Router.home(currentApplicant)).toEqual(RoutesBuilder.applicant.myProfile());
    });
  });

  describe("Admin", () => {
    const createCurrentAdmin = () => {
      const role = new Role(CurrentRole.Admin);
      SessionStorageRepository.saveCurrentRole(role);
      return CurrentUser({
        ...userAttributes,
        admin: {
          user: {
            uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da"
          },
          secretary: Secretary.graduados
        }
      });
    };

    it("returns home route", () => {
      const currentAdmin = createCurrentAdmin();
      expect(Router.home(currentAdmin)).toEqual(RoutesBuilder.admin.home());
    });
  });
});
