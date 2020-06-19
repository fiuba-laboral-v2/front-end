import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentUser, TCurrentUser } from "$models/CurrentUser";
import { Permissions } from "$models/Permissions";
import { RoutesBuilder } from "$models/RoutesBuilder";

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

    const expectRouteAccessToBe = (
      currentUser: TCurrentUser,
      expected: boolean,
      routes: Array<() => string>
    ) =>
      routes.forEach(route => expect(Permissions.canAccess(currentUser, route())).toBe(expected));

    describe("canAccess", () => {
      it("returns true if status is pending for myProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(Permissions.canAccess(currentCompany!, myProfile())).toBe(true);
      });

      it("returns true if status is pending editMyProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expect(Permissions.canAccess(currentCompany!, editMyProfile())).toBe(true);
      });

      it("returns false if status is pending for the rest of the routes", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
        expectRouteAccessToBe(currentCompany!, false, [
          () => signUp(),
          () => createOffer(),
          () => editOffer("uuid"),
          () => offer("uuid"),
          () => myOffers(),
          () => jobApplications(),
          () => applicantDetail("uuid")
        ]);
      });

      it("returns true if status is rejected for myProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
        expect(Permissions.canAccess(currentCompany!, myProfile())).toBe(true);
      });

      it("returns false if status is rejected for the rest of the routes", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
        expectRouteAccessToBe(currentCompany!, false, [
          () => editMyProfile(),
          () => signUp(),
          () => createOffer(),
          () => editOffer("uuid"),
          () => offer("uuid"),
          () => myOffers(),
          () => jobApplications(),
          () => applicantDetail("uuid")
        ]);
      });

      it("returns true if the company status is approved for signUp route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, signUp())).toBe(true);
      });

      it("returns true if the company status is approved for myProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, myProfile())).toBe(true);
      });

      it("returns true if the company status is approved for editMyProfile route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, editMyProfile())).toBe(true);
      });

      it("returns true if the company status is approved for createOffer route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, createOffer())).toBe(true);
      });

      it("returns true if the company status is approved for editOffer route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, editOffer("uuid"))).toBe(true);
      });

      it("returns true if the company status is approved for offer route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, offer("uuid"))).toBe(true);
      });

      it("returns true if the company status is approved for myOffers route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, myOffers())).toBe(true);
      });

      it("returns true if the company status is approved for jobApplications route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, jobApplications())).toBe(true);
      });

      it("returns true if the company status is approved for applicantDetail route", () => {
        const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
        expect(Permissions.canAccess(currentCompany!, applicantDetail("uuid"))).toBe(true);
      });
    });

    it("return pendingProfile translation key if status is pending", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
      expect(
        Permissions.getAccessError(currentCompany!, jobApplications())
      ).toEqual(
        "pendingProfile"
      );
    });

    it("return rejectedProfile translation key if status is rejected", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(
        Permissions.getAccessError(currentCompany!, jobApplications())
      ).toEqual(
        "rejectedProfile"
      );
    });
  });
});
