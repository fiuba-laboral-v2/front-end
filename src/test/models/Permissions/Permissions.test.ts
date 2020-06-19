import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentUser, TCurrentUser } from "$models/CurrentUser";
import { Permissions } from "$models/Permissions";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { PendingCompanyError, RejectedCompanyError } from "$models/Errors";

describe("Permissions", () => {
  const userAttributes = {
    email: "companyUser@company.com",
    name: "eric",
    surname: "Clapton"
  };

  describe("Company", () => {
    const {
      signUp,
      myProfile,
      editMyProfile,
      createOffer,
      editOffer,
      offer,
      myOffers,
      jobApplications,
      applicantDetail
    } = RoutesBuilder.company;
    const createCurrentCompanyUser = (status: ApprovalStatus) => CurrentUser({
      ...userAttributes,
      company: {
        uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
        approvalStatus: status
      }
    });

    const expectToThrowCheckErrorForRoutes = (
      currentUser: TCurrentUser,
      routes: Array<() => string>,
      error: object
    ) =>
      routes.forEach(route => expect(() => Permissions.check(currentUser, route())).toThrow(error));

    describe("check", () => {
      it("does not throw error if status is pending for myProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, myProfile())).not.toThrow();
      });

      it("does not throw error if status is pending for editMyProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, editMyProfile())).not.toThrow();
      });

      it("throws error if status is pending for some specific routes", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expectToThrowCheckErrorForRoutes(
          currentCompany,
          [
            () => signUp(),
            () => createOffer(),
            () => editOffer("uuid"),
            () => offer("uuid"),
            () => myOffers(),
            () => jobApplications(),
            () => applicantDetail("uuid")
          ],
          PendingCompanyError
        );
      });

      it("does not throw error if status is rejected for myProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
        expect(() => Permissions.check(currentCompany, myProfile())).not.toThrow();
      });

      it("throws error if status is rejected for some specific routes", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
        expectToThrowCheckErrorForRoutes(
          currentCompany,
          [
            () => editMyProfile(),
            () => signUp(),
            () => createOffer(),
            () => editOffer("uuid"),
            () => offer("uuid"),
            () => myOffers(),
            () => jobApplications(),
            () => applicantDetail("uuid")
          ],
          RejectedCompanyError
        );
      });

      describe("When is approved", () => {
        it("does not throw error if the company status is approved for signUp route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, signUp())).not.toThrow();
        });

        it("does not throw error if the company status is approved for myProfile route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, myProfile())).not.toThrow();
        });

        it("does not throw error if the company status is approved for editMyProfile route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, editMyProfile())).not.toThrow();
        });

        it("does not throw error if the company status is approved for createOffer route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, createOffer())).not.toThrow();
        });

        it("does not throw error if the company status is approved for editOffer route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, editOffer("uuid"))).not.toThrow();
        });

        it("does not throw error if the company status is approved for offer route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, offer("uuid"))).not.toThrow();
        });

        it("does not throw error if the company status is approved for myOffers route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, myOffers())).not.toThrow();
        });

        it("does not throw error if company status is approved for jobApplications route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, jobApplications())).not.toThrow();
        });

        it("does not throw error if company status is approved for applicantDetail route", () => {
          const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentCompany, applicantDetail("uuid"))).not.toThrow();
        });
      });
    });
  });
});
