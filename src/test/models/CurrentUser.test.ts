import { CurrentUser } from "$models/CurrentUser";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

describe("CurrentUser", () => {
  it("returns a valid current applicant user", () => {
    const currentUser = CurrentUser({
      data: {
        getCurrentUser: {
          email: "companyUser@company.com",
          name: "eric",
          surname: "Clapton",
          applicant: { uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" }
        }
      },
      loading: false,
      error: undefined
    });
    expect(currentUser.isApplicant()).toBe(true);
    expect(currentUser.isCompany()).toBe(false);
    expect(currentUser.isAdmin()).toBe(false);
  });

  it("returns a valid current company user", () => {
    const companyAttributes = {
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      approvalStatus: ApprovalStatus.pending
    };
    const currentUser = CurrentUser({
      data: {
        getCurrentUser: {
          email: "companyUser@company.com",
          name: "eric",
          surname: "Clapton",
          company: companyAttributes
        }
      },
      loading: false,
      error: undefined
    });
    expect(currentUser.isCompany()).toBe(true);
    expect(currentUser.isApplicant()).toBe(false);
    expect(currentUser.isAdmin()).toBe(false);
    expect(currentUser.company()).toMatchObject(companyAttributes);
  });

  it("returns a valid current admin user", () => {
    const currentUser = CurrentUser({
      data: {
        getCurrentUser: {
          email: "companyUser@company.com",
          name: "eric",
          surname: "Clapton",
          admin: {
            userUuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da"
          }
        }
      },
      loading: false,
      error: undefined
    });
    expect(currentUser.isAdmin()).toBe(true);
    expect(currentUser.isCompany()).toBe(false);
    expect(currentUser.isApplicant()).toBe(false);
  });
});
