import { NavBarLinks } from "$models/NavBarLinks";
import { CurrentUser } from "$models/CurrentUser";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Secretary } from "$interfaces/Secretary";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import BusinessIcon from "@material-ui/icons/Business";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SchoolIcon from "@material-ui/icons/School";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import HomeIcon from "@material-ui/icons/Home";
import { AdminNotificationIcon } from "$components/AdminNotificationIcon";
import { CompanyNotificationsIcon } from "$components/CompanyNotificationsIcon";
import { ApplicantNotificationIcon } from "$components/ApplicantNotificationIcon";

describe("NavBarLinks", () => {
  const translations = {
    companies: "companies",
    applicants: "applicants",
    admins: "admins",
    jobOffers: "jobOffers",
    jobApplications: "jobApplications",
    createOffer: "createOffer",
    notifications: "notifications",
    signUp: "signUp",
    tasks: "tasks",
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
          tooltipMessage: translations.pendingProfile,
          icon: PersonAddIcon
        },
        {
          path: RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          tooltipMessage: translations.pendingProfile,
          icon: LibraryAddIcon
        },
        {
          path: RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          tooltipMessage: translations.pendingProfile,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.company.notifications(),
          title: translations.notifications,
          tooltipMessage: translations.pendingProfile,
          icon: CompanyNotificationsIcon
        }
      ]);
    });

    it("returns a list of company links in the navBar in rejected status", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.rejected);
      expect(NavBarLinks.create(currentCompany, translations)).toEqual([
        {
          path: RoutesBuilder.company.jobApplications(),
          title: translations.jobApplications,
          tooltipMessage: translations.rejectedProfile,
          icon: PersonAddIcon
        },
        {
          path: RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          tooltipMessage: translations.rejectedProfile,
          icon: LibraryAddIcon
        },
        {
          path: RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          tooltipMessage: translations.rejectedProfile,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.company.notifications(),
          title: translations.notifications,
          tooltipMessage: translations.rejectedProfile,
          icon: CompanyNotificationsIcon
        }
      ]);
    });

    it("returns a list of company links in the navBar in approved status", () => {
      const currentCompany = createCurrentCompanyUser(ApprovalStatus.approved);
      expect(NavBarLinks.create(currentCompany, translations)).toEqual([
        {
          path: RoutesBuilder.company.jobApplications(),
          title: translations.jobApplications,
          icon: PersonAddIcon
        },
        {
          path: RoutesBuilder.company.createOffer(),
          title: translations.createOffer,
          icon: LibraryAddIcon
        },
        {
          path: RoutesBuilder.company.myOffers(),
          title: translations.myOffers,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.company.myProfile(),
          title: translations.myCompanyProfile,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.company.notifications(),
          title: translations.notifications,
          icon: CompanyNotificationsIcon
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
          title: translations.jobOffers,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.applicant.myProfile(),
          title: translations.myProfile,
          icon: SchoolIcon
        },
        {
          path: RoutesBuilder.applicant.companies(),
          title: translations.companies,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.applicant.notifications(),
          title: translations.notifications,
          icon: ApplicantNotificationIcon
        }
      ]);
    });

    it("returns a list of applicant links in the navBar in pending status", () => {
      const currentApplicant = createCurrentApplicant(ApprovalStatus.pending);
      expect(NavBarLinks.create(currentApplicant, translations)).toEqual([
        {
          path: RoutesBuilder.applicant.offerList(),
          title: translations.jobOffers,
          tooltipMessage: translations.pendingProfile,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.applicant.myProfile(),
          title: translations.myProfile,
          icon: SchoolIcon
        },
        {
          path: RoutesBuilder.applicant.companies(),
          title: translations.companies,
          tooltipMessage: translations.pendingProfile,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.applicant.notifications(),
          title: translations.notifications,
          tooltipMessage: translations.pendingProfile,
          icon: ApplicantNotificationIcon
        }
      ]);
    });

    it("returns a list of applicant links in the navBar in rejected status", () => {
      const currentApplicant = createCurrentApplicant(ApprovalStatus.rejected);
      expect(NavBarLinks.create(currentApplicant, translations)).toEqual([
        {
          path: RoutesBuilder.applicant.offerList(),
          title: translations.jobOffers,
          tooltipMessage: translations.rejectedProfile,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.applicant.myProfile(),
          title: translations.myProfile,
          icon: SchoolIcon
        },
        {
          path: RoutesBuilder.applicant.companies(),
          title: translations.companies,
          tooltipMessage: translations.rejectedProfile,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.applicant.notifications(),
          title: translations.notifications,
          tooltipMessage: translations.rejectedProfile,
          icon: ApplicantNotificationIcon
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
          title: translations.tasks,
          icon: HomeIcon
        },
        {
          path: RoutesBuilder.admin.applicants(),
          title: translations.applicants,
          icon: SchoolIcon
        },
        {
          path: RoutesBuilder.admin.companies(),
          title: translations.companies,
          icon: BusinessIcon
        },
        {
          path: RoutesBuilder.admin.admins(),
          title: translations.admins,
          icon: SupervisedUserCircleIcon
        },
        {
          path: RoutesBuilder.admin.offers(),
          title: translations.jobOffers,
          icon: LibraryBooksIcon
        },
        {
          path: RoutesBuilder.admin.jobApplications(),
          title: translations.jobApplications,
          icon: PersonAddIcon
        },
        {
          path: RoutesBuilder.admin.notifications(),
          title: translations.notifications,
          icon: AdminNotificationIcon
        }
      ]);
    });
  });
});
