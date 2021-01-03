import { CurrentUser } from "$models/CurrentUser";
import { Role } from "$models/Role";
import { calculateCurrentRole } from "$models/calculateCurrentRole";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { Secretary } from "$interfaces/Secretary";
import { CurrentRole, SessionStorageRepository } from "$repositories";

describe("calculateCurrentRole", () => {
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
    calculateCurrentRole(currentUser);
    const role = SessionStorageRepository.getCurrentRole();
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
    calculateCurrentRole(currentUser);
    const role = SessionStorageRepository.getCurrentRole();
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
    calculateCurrentRole(currentUser);
    const role = SessionStorageRepository.getCurrentRole();
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
    calculateCurrentRole(currentUser);
    const role = SessionStorageRepository.getCurrentRole();
    expect(role.isAdminRole()).toBe(true);
  });

  it("does not update the currentRole if there is already one", () => {
    const applicantRole = new Role(CurrentRole.Applicant);
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
    calculateCurrentRole(currentUser);
    const role = SessionStorageRepository.getCurrentRole();
    expect(role).toEqual(applicantRole);
  });
});
