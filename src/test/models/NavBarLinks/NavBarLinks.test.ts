import { NavBarLinks } from "$models/NavBarLinks";
import { CurrentUser } from "$models/CurrentUser";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Secretary } from "$interfaces/Secretary";

describe("NavBarLinks", () => {
  const translations = {
    companies: "companies",
    applicants: "applicants",
    admins: "admins",
    jobOffers: "jobOffers",
    jobApplications: "jobApplications",
    createOffer: "createOffer",
    signUp: "signUp",
    tasks: "tasks",
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
    const createCurrentCompanyUser = (status: ApprovalStatus) =>
      CurrentUser({
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
          path: RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          tooltipMessage: translations.pendingProfile
        },
        {
          path: RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          tooltipMessage: translations.pendingProfile
        },
        {
          path: RoutesBuilder.company.myProfile(),
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
          path: RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          tooltipMessage: translations.rejectedProfile
        },
        {
          path: RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          tooltipMessage: translations.rejectedProfile
        },
        {
          path: RoutesBuilder.company.myProfile(),
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
          path: RoutesBuilder.company.createOffer(),
          title: translations.createOffer
        },
        {
          path: RoutesBuilder.company.myOffers(),
          title: translations.myOffers
        },
        {
          path: RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile
        }
      ]);
    });
  });

  describe("Applicant", () => {
    const createCurrentApplicant = (approvalStatus: ApprovalStatus) =>
      CurrentUser({
        ...userAttributes,
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus
        }
      });

    it("returns a list of applicant links in the navBar in approved status", () => {
      const currentApplicant = createCurrentApplicant(ApprovalStatus.approved);
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

    it("returns a list of applicant links in the navBar in pending status", () => {
      const currentApplicant = createCurrentApplicant(ApprovalStatus.pending);
      expect(NavBarLinks.create(currentApplicant, translations)).toEqual([
        {
          path: RoutesBuilder.applicant.offerList(),
          title: translations.jobOffers,
          tooltipMessage: translations.pendingProfile
        },
        {
          path: RoutesBuilder.applicant.myProfile(),
          title: translations.myProfile
        },
        {
          path: RoutesBuilder.applicant.companies(),
          title: translations.companies,
          tooltipMessage: translations.pendingProfile
        }
      ]);
    });

    it("returns a list of applicant links in the navBar in rejected status", () => {
      const currentApplicant = createCurrentApplicant(ApprovalStatus.rejected);
      expect(NavBarLinks.create(currentApplicant, translations)).toEqual([
        {
          path: RoutesBuilder.applicant.offerList(),
          title: translations.jobOffers,
          tooltipMessage: translations.rejectedProfile
        },
        {
          path: RoutesBuilder.applicant.myProfile(),
          title: translations.myProfile
        },
        {
          path: RoutesBuilder.applicant.companies(),
          title: translations.companies,
          tooltipMessage: translations.rejectedProfile
        }
      ]);
    });
  });

  describe("Admin", () => {
    const createCurrentAdmin = () =>
      CurrentUser({
        ...userAttributes,
        admin: {
          user: {
            uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da"
          },
          secretary: Secretary.graduados
        }
      });

    it("returns a list of admin links in the navBar", () => {
      const currentAdmin = createCurrentAdmin();
      expect(NavBarLinks.create(currentAdmin, translations)).toEqual([
        {
          path: RoutesBuilder.admin.home(),
          title: translations.tasks
        },
        {
          path: RoutesBuilder.admin.applicants(),
          title: translations.applicants
        },
        {
          path: RoutesBuilder.admin.companies(),
          title: translations.companies
        },
        {
          path: RoutesBuilder.admin.admins(),
          title: translations.admins
        },
        {
          path: RoutesBuilder.admin.offers(),
          title: translations.jobOffers
        },
        {
          path: RoutesBuilder.admin.jobApplications(),
          title: translations.jobApplications
        }
      ]);
    });
  });
});
