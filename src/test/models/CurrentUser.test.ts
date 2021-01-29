import { CurrentUser } from "$models/CurrentUser";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { RoleName, SessionStorageRepository } from "$repositories";
import { Role } from "$models/Role";

describe("CurrentUser", () => {
  it("returns a valid current applicant user", () => {
    const currentUser = CurrentUser({
      email: "companyUser@company.com",
      name: "eric",
      surname: "Clapton",
      applicant: {
        uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
        approvalStatus: ApprovalStatus.pending
      }
    });
    expect(currentUser?.applicant).not.toBeUndefined();
    expect(currentUser?.company).toBeUndefined();
    expect(currentUser?.admin).toBeUndefined();
  });

  it("returns a valid current company user", () => {
    const companyAttributes = {
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      approvalStatus: ApprovalStatus.pending
    };
    const currentUser = CurrentUser({
      email: "companyUser@company.com",
      name: "eric",
      surname: "Clapton",
      company: companyAttributes
    });
    expect(currentUser?.applicant).toBeUndefined();
    expect(currentUser?.admin).toBeUndefined();
    expect(currentUser?.company).toMatchObject(companyAttributes);
  });

  it("returns a valid current admin user", () => {
    const currentUser = CurrentUser({
      email: "admin@admin.com",
      name: "eric",
      surname: "Clapton",
      admin: {
        user: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da"
        },
        secretary: Secretary.extension
      }
    });
    expect(currentUser?.admin).not.toBeUndefined();
    expect(currentUser?.company).toBeUndefined();
    expect(currentUser?.applicant).toBeUndefined();
  });

  describe("getCurrentRole", () => {
    const currentRoute = "";
    const commonAttributes = {
      email: "companyUser@company.com",
      name: "eric",
      surname: "Clapton"
    };

    beforeEach(() => SessionStorageRepository.clear());

    it("saves applicant as the current role", () => {
      const currentUser = CurrentUser({
        ...commonAttributes,
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus: ApprovalStatus.pending
        }
      });
      const role = currentUser.getCurrentRole(currentRoute);
      expect(role.isApplicantRole()).toBe(true);
    });

    it("saves company as the current role", () => {
      const currentUser = CurrentUser({
        ...commonAttributes,
        company: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus: ApprovalStatus.pending
        }
      });
      const role = currentUser.getCurrentRole(currentRoute);
      expect(role.isCompanyRole()).toBe(true);
    });

    it("saves admin as the current role", () => {
      const currentUser = CurrentUser({
        ...commonAttributes,
        admin: {
          user: { uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" },
          secretary: Secretary.extension
        }
      });
      const role = currentUser.getCurrentRole(currentRoute);
      expect(role.isAdminRole()).toBe(true);
    });

    it("saves admin as the current role if the current usr is admin and applicant", () => {
      const currentUser = CurrentUser({
        ...commonAttributes,
        admin: {
          user: { uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" },
          secretary: Secretary.extension
        },
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus: ApprovalStatus.pending
        }
      });
      const role = currentUser.getCurrentRole(currentRoute);
      expect(role.isAdminRole()).toBe(true);
    });

    it("does not update the currentRole if there is already one", () => {
      const applicantRole = new Role(RoleName.Applicant);
      SessionStorageRepository.saveCurrentRole(applicantRole);
      const currentUser = CurrentUser({
        ...commonAttributes,
        admin: {
          user: { uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" },
          secretary: Secretary.extension
        },
        applicant: {
          uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
          approvalStatus: ApprovalStatus.pending
        }
      });
      const role = currentUser.getCurrentRole(currentRoute);
      expect(role).toEqual(applicantRole);
    });
  });
});
