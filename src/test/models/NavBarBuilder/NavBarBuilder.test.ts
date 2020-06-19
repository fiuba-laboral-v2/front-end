import { NavBarLinks } from "$models/NavBarLinks";
import { CurrentUser } from "$models/CurrentUser";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { RoutesBuilder } from "$models/RoutesBuilder";

describe("NavBarLinks", () => {
  const translations = {
    companies: "companies",
    applicants: "applicants",
    jobOffers: "jobOffers",
    jobApplications: "jobApplications",
    createOffer: "createOffer",
    signUp: "signUp",
    logIn: "logIn",
    logOut: "logOut",
    myProfile: "myProfile",
    myCompanyProfile: "myCompanyProfile",
    myOffers: "myOffers",
    pendingProfile: "pendingProfile",
    rejectedProfile: "rejectedProfile"
  };
  const userAttributes = {
    email: "companyUser@company.com",
    name: "Eric",
    surname: "Clapton"
  };

  describe("Company", () => {
    const createCurrentCompanyUser = (status: ApprovalStatus) => CurrentUser({
      ...userAttributes,
      company: {
        uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
        approvalStatus: status
      }
    });

    it("returns a list of company links in the navBar in pending status", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.pending);
      expect(NavBarLinks.create(currentCompany, translations)).toEqual([
        {
          path: RoutesBuilder.company.jobApplications(),
          title: translations.jobApplications,
          tooltipMessage: translations.pendingProfile
        },
        {
          path:  RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          tooltipMessage: translations.pendingProfile
        },
        {
          path:  RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          tooltipMessage: translations.pendingProfile
        },
        {
          path:  RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile
        }
      ]);
    });

    it("returns a list of company links in the navBar in rejected status", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(NavBarLinks.create(currentCompany, translations)).toEqual([
        {
          path: RoutesBuilder.company.jobApplications(),
          title: translations.jobApplications,
          tooltipMessage: translations.rejectedProfile
        },
        {
          path:  RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          tooltipMessage: translations.rejectedProfile
        },
        {
          path:  RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          tooltipMessage: translations.rejectedProfile
        },
        {
          path:  RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile
        }
      ]);
    });

    it("returns a list of company links in the navBar in approved status", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
      expect(NavBarLinks.create(currentCompany, translations)).toEqual([
        {
          path: RoutesBuilder.company.jobApplications(),
          title: translations.jobApplications
        },
        {
          path:  RoutesBuilder.company.createOffer(),
          title: translations.createOffer
        },
        {
          path:  RoutesBuilder.company.myOffers(),
          title: translations.myOffers
        },
        {
          path:  RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile
        }
      ]);
    });
  });

  describe("Applicant", () => {
    const createCurrentApplicant = () => CurrentUser({
      ...userAttributes,
      applicant: { uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" }
    });

    it("returns a list of applicant links in the navBar", () => {
      const currentApplicant = createCurrentApplicant();
      expect(NavBarLinks.create(currentApplicant, translations)).toEqual([
        {
          path: RoutesBuilder.applicant.offerList(),
          title: translations.jobOffers
        },
        {
          path: RoutesBuilder.applicant.myProfile(),
          title: translations.myProfile
        },
        {
          path: RoutesBuilder.applicant.companies(),
          title: translations.companies
        }
      ]);
    });
  });

  describe("Admin", () => {
    const createCurrentAdmin = () => CurrentUser({
      ...userAttributes,
      admin: { userUuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" }
    });

    it("returns an empty list of admin links in the navBar", () => {
      const currentAdmin = createCurrentAdmin();
      expect(NavBarLinks.create(currentAdmin, translations)).toEqual([]);
    });
  });
});
