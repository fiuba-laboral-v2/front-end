import { CurrentCompany } from "$models/CurrentCompany";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { RoutesBuilder } from "../../models/RoutesBuilder";

describe("CurrentCompany", () => {
  const companyAttributes = {
    uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
    user: {
      email: "companyUser@company.com",
      name: "eric",
      surname: "Clapton"
    },
    cuit: "30711819017",
    companyName: "companyName",
    slogan: "slogan",
    description: "description",
    logo: "https://logo.png",
    website: "https://website.com/",
    email: "email@email.com",
    approvalStatus: ApprovalStatus.pending
  };

  it("creates a valid company", () => {
    const company = CurrentCompany(companyAttributes);
    expect(company).toMatchObject(companyAttributes);
  });

  it("returns true if company approval status is pending", () => {
    const company = CurrentCompany(companyAttributes);
    expect(company.isPending()).toBe(true);
    expect(company.isApproved()).toBe(false);
    expect(company.isRejected()).toBe(false);
  });

  it("returns true if company approval status is approved", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.approved
    });
    expect(company.isApproved()).toBe(true);
    expect(company.isPending()).toBe(false);
    expect(company.isRejected()).toBe(false);
  });

  it("returns true if company approval status is rejected", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.rejected
    });
    expect(company.isRejected()).toBe(true);
    expect(company.isApproved()).toBe(false);
    expect(company.isPending()).toBe(false);
  });

  it("returns all available routes when the company is in pending status", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.pending
    });
    expect(company.availableRoutesInPendingStatus()).toEqual(
      expect.arrayContaining([
        RoutesBuilder.company.editMyProfile(),
        RoutesBuilder.company.myProfile()
      ])
    );
  });

  it("returns all available routes when the company is in rejected status", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.rejected
    });
    expect(company.availableRoutesInPendingStatus()).toEqual(
      expect.arrayContaining([
        RoutesBuilder.company.myProfile()
      ])
    );
  });

  it("returns that all routes are not disabled when status is approved", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.approved
    });
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
    expect(company.isRouteDisabled(signUp())).toBe(false);
    expect(company.isRouteDisabled(myProfile())).toBe(false);
    expect(company.isRouteDisabled(editMyProfile())).toBe(false);
    expect(company.isRouteDisabled(createOffer())).toBe(false);
    expect(company.isRouteDisabled(editOffer("uuid"))).toBe(false);
    expect(company.isRouteDisabled(offer("uuid"))).toBe(false);
    expect(company.isRouteDisabled(myOffers())).toBe(false);
    expect(company.isRouteDisabled(jobApplications())).toBe(false);
    expect(company.isRouteDisabled(applicantDetail("uuid"))).toBe(false);
  });

  it("returns company profile edit page if the status is pending", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.pending
    });
    expect(company.getHomeRoute()).toEqual(RoutesBuilder.company.editMyProfile());
  });

  it("returns company profile page if the status is rejected", () => {
    const company = CurrentCompany({
      ...companyAttributes,
      approvalStatus: ApprovalStatus.rejected
    });
    expect(company.getHomeRoute()).toEqual(RoutesBuilder.company.myProfile());
  });
});
