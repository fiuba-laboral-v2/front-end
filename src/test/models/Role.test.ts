import { Role } from "$models/Role";
import { CurrentRole } from "$repositories";

describe("Role", () => {
  describe("CompanyRole", () => {
    it("creates a company role", () => {
      const role = new Role(CurrentRole.Company);
      expect(role.role).toEqual(CurrentRole.Company);
    });

    it("returns true for the isCompanyRole method", () => {
      const role = new Role(CurrentRole.Company);
      expect(role.isCompanyRole()).toBe(true);
    });

    it("returns false for the isApplicantRole method", () => {
      const role = new Role(CurrentRole.Company);
      expect(role.isApplicantRole()).toBe(false);
    });

    it("returns false for the isAdminRole method", () => {
      const role = new Role(CurrentRole.Company);
      expect(role.isAdminRole()).toBe(false);
    });
  });

  describe("ApplicantRole", () => {
    it("creates an applicant role", () => {
      const role = new Role(CurrentRole.Applicant);
      expect(role.role).toEqual(CurrentRole.Applicant);
    });

    it("returns true for the isApplicantRole method", () => {
      const role = new Role(CurrentRole.Applicant);
      expect(role.isApplicantRole()).toBe(true);
    });

    it("returns false for the isCompanyRole method", () => {
      const role = new Role(CurrentRole.Applicant);
      expect(role.isCompanyRole()).toBe(false);
    });

    it("returns false for the isAdminRole method", () => {
      const role = new Role(CurrentRole.Applicant);
      expect(role.isAdminRole()).toBe(false);
    });
  });

  describe("AdminRole", () => {
    it("creates an admin role", () => {
      const role = new Role(CurrentRole.Admin);
      expect(role.role).toEqual(CurrentRole.Admin);
    });

    it("returns true for the isAdminRole method", () => {
      const role = new Role(CurrentRole.Admin);
      expect(role.isAdminRole()).toBe(true);
    });

    it("returns false for the isApplicantRole method", () => {
      const role = new Role(CurrentRole.Admin);
      expect(role.isApplicantRole()).toBe(false);
    });

    it("returns false for the isCompanyRole method", () => {
      const role = new Role(CurrentRole.Admin);
      expect(role.isCompanyRole()).toBe(false);
    });
  });
});
