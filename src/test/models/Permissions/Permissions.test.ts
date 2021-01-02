import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentUser, TCurrentUser } from "$models/CurrentUser";
import { Permissions } from "$models/Permissions";
import { RoutesBuilder } from "$models/RoutesBuilder";
import {
  PendingApplicantError,
  PendingCompanyError,
  RejectedApplicantError,
  RejectedCompanyError
} from "$models/Errors";

const expectToThrowCheckErrorForRoutes = (
  currentUser: TCurrentUser,
  routes: Array<() => string>,
  error: object
) => routes.forEach(route => expect(() => Permissions.check(currentUser, route())).toThrow(error));

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
      applicantDetail,
      users
    } = RoutesBuilder.company;
    const createCurrentCompanyUser = (status: ApprovalStatus) =>
      CurrentUser({
        ...userAttributes,
        company: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus: status
        }
      });

    describe("check", () => {
      it("does not throw error if status is pending for myProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, myProfile())).not.toThrow();
      });

      it("does not throw error if status is pending for editMyProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, editMyProfile())).not.toThrow();
      });

      it("does not throw error if status is pending for users route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, users())).not.toThrow();
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

      it("does not throw error if status is rejected for users route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
        expect(() => Permissions.check(currentCompany, users())).not.toThrow();
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

  describe("Applicant", () => {
    const {
      signUp,
      myProfile,
      editMyProfile,
      offerList,
      offerDetail,
      companies,
      companyProfile
    } = RoutesBuilder.applicant;

    const createCurrentApplicantUser = (status: ApprovalStatus) =>
      CurrentUser({
        ...userAttributes,
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus: status
        }
      });

    describe("check", () => {
      it("does not throw error if status is pending for myProfile route", () => {
        const currentCompany = createCurrentApplicantUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, myProfile())).not.toThrow();
      });

      it("does not throw error if status is pending for editMyProfile route", () => {
        const currentCompany = createCurrentApplicantUser(ApprovalStatus.pending);
        expect(() => Permissions.check(currentCompany, editMyProfile())).not.toThrow();
      });

      it("throws error if status is pending for some specific routes", () => {
        const currentApplicant = createCurrentApplicantUser(ApprovalStatus.pending);
        expectToThrowCheckErrorForRoutes(
          currentApplicant,
          [
            () => signUp(),
            () => offerList(),
            () => offerDetail("uuid"),
            () => companies(),
            () => companyProfile("uuid")
          ],
          PendingApplicantError
        );
      });

      it("does not throw error if status is rejected for myProfile route", () => {
        const currentApplicant = createCurrentApplicantUser(ApprovalStatus.rejected);
        expect(() => Permissions.check(currentApplicant, myProfile())).not.toThrow();
      });

      it("throws error if status is rejected for some specific routes", () => {
        const currentApplicant = createCurrentApplicantUser(ApprovalStatus.rejected);
        expectToThrowCheckErrorForRoutes(
          currentApplicant,
          [
            () => signUp(),
            () => editMyProfile(),
            () => offerList(),
            () => offerDetail("uuid"),
            () => companies(),
            () => companyProfile("uuid")
          ],
          RejectedApplicantError
        );
      });

      describe("When is approved", () => {
        it("does not throw error if the applicant status is approved for signUp route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, signUp())).not.toThrow();
        });

        it("does not throw error if the applicant status is approved for myProfile route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, myProfile())).not.toThrow();
        });

        it("does not throw if the applicant status is approved for editMyProfile route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, editMyProfile())).not.toThrow();
        });

        it("does not throw error if the applicant status is approved for offerList route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, offerList())).not.toThrow();
        });

        it("does not throw error if the applicant status is approved for offerDetail route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, offerDetail("uuid"))).not.toThrow();
        });

        it("does not throw error if the applicant status is approved for companies route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, companies())).not.toThrow();
        });

        it("does not throw error if applicant status is approved for companyProfile route", () => {
          const currentApplicant = createCurrentApplicantUser(ApprovalStatus.approved);
          expect(() => Permissions.check(currentApplicant, companyProfile("uuid"))).not.toThrow();
        });
      });
    });
  });
});
