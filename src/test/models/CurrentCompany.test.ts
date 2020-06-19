import { CurrentCompany } from "$models/CurrentCompany";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

describe("CurrentCompany", () => {
  it("creates a valid company", () => {
    const companyAttributes = {
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      approvalStatus: ApprovalStatus.pending
    };
    const company = CurrentCompany(companyAttributes);
    expect(company).toMatchObject(companyAttributes);
  });

  it("returns true if company approval status is pending", () => {
    const company = CurrentCompany({
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      approvalStatus: ApprovalStatus.pending
    });
    expect(company.isPending()).toBe(true);
    expect(company.isApproved()).toBe(false);
    expect(company.isRejected()).toBe(false);
  });

  it("returns true if company approval status is approved", () => {
    const company = CurrentCompany({
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      approvalStatus: ApprovalStatus.approved
    });
    expect(company.isApproved()).toBe(true);
    expect(company.isPending()).toBe(false);
    expect(company.isRejected()).toBe(false);
  });

  it("returns true if company approval status is rejected", () => {
    const company = CurrentCompany({
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      approvalStatus: ApprovalStatus.rejected
    });
    expect(company.isRejected()).toBe(true);
    expect(company.isApproved()).toBe(false);
    expect(company.isPending()).toBe(false);
  });
});
