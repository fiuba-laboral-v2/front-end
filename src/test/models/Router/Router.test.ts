import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentUser } from "$models/CurrentUser";
import { Router } from "$models/Router";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Secretary } from "$interfaces/Secretary";

describe("Router", () => {
  const currentRoute = "";
  const userAttributes = {
    email: "companyUser@company.com",
    name: "Eric",
    surname: "Clapton"
  };

  describe("Company", () => {
    const createCurrentCompanyUser = (approvalStatus: ApprovalStatus) =>
      CurrentUser({
        ...userAttributes,
        company: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus
        }
      });

    it("returns jobApplications route if status is approved", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
      expect(Router.home(currentCompany, currentRoute)).toEqual(
        RoutesBuilder.company.jobApplications()
      );
    });

    it("returns editMyProfile route if status is pending", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
      expect(Router.home(currentCompany, currentRoute)).toEqual(
        RoutesBuilder.company.editMyProfile()
      );
    });

    it("returns myProfile route if status is rejected", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(Router.home(currentCompany, currentRoute)).toEqual(RoutesBuilder.company.myProfile());
    });
  });

  describe("Applicant", () => {
    const createCurrentApplicantUser = (approvalStatus: ApprovalStatus) =>
      CurrentUser({
        ...userAttributes,
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus
        }
      });

    it("returns offerList route if status is approved", () => {
      const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
      expect(Router.home(currentApplicant, currentRoute)).toEqual(
        RoutesBuilder.applicant.offerList()
      );
    });

    it("returns editMyProfile route if status is pending", () => {
      const currentApplicant = createCurrentApplicantUser(ApprovalStatus.pending);
      expect(Router.home(currentApplicant, currentRoute)).toEqual(
        RoutesBuilder.applicant.editMyProfile()
      );
    });

    it("returns myProfile route if status is rejected", () => {
      const currentApplicant = createCurrentApplicantUser(ApprovalStatus.rejected);
      expect(Router.home(currentApplicant, currentRoute)).toEqual(
        RoutesBuilder.applicant.myProfile()
      );
    });
  });

  describe("Admin", () => {
    const currentAdmin = CurrentUser({
      ...userAttributes,
      admin: {
        user: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da"
        },
        secretary: Secretary.graduados
      }
    });

    it("returns home route", () => {
      expect(Router.home(currentAdmin, currentRoute)).toEqual(RoutesBuilder.admin.home());
    });
  });
});
