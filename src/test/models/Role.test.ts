import { Role } from "$models/Role";
import { CurrentRole } from "$repositories";

describe("Role", () => {
  describe("CompanyRole", () => {
    it("creates a company role", () => {
      const role = new Role(CurrentRole.company);
      expect(role.role).toEqual(CurrentRole.company);
    });

    it("returns true for the isCompanyRole method", () => {
      const role = new Role(CurrentRole.company);
      expect(role.isCompanyRole()).toBe(true);
    });

    it("returns false for the isApplicantRole method", () => {
      const role = new Role(CurrentRole.company);
      expect(role.isApplicantRole()).toBe(false);
    });

    it("returns false for the isAdminRole method", () => {
      const role = new Role(CurrentRole.company);
      expect(role.isAdminRole()).toBe(false);
    });
  });

  describe("ApplicantRole", () => {
    it("creates an applicant role", () => {
      const role = new Role(CurrentRole.applicant);
      expect(role.role).toEqual(CurrentRole.applicant);
    });

    it("returns true for the isApplicantRole method", () => {
      const role = new Role(CurrentRole.applicant);
      expect(role.isApplicantRole()).toBe(true);
    });

    it("returns false for the isCompanyRole method", () => {
      const role = new Role(CurrentRole.applicant);
      expect(role.isCompanyRole()).toBe(false);
    });

    it("returns false for the isAdminRole method", () => {
      const role = new Role(CurrentRole.applicant);
      expect(role.isAdminRole()).toBe(false);
    });
  });

  describe("AdminRole", () => {
    it("creates an admin role", () => {
      const role = new Role(CurrentRole.admin);
      expect(role.role).toEqual(CurrentRole.admin);
    });

    it("returns true for the isAdminRole method", () => {
      const role = new Role(CurrentRole.admin);
      expect(role.isAdminRole()).toBe(true);
    });

    it("returns false for the isApplicantRole method", () => {
      const role = new Role(CurrentRole.admin);
      expect(role.isApplicantRole()).toBe(false);
    });

    it("returns false for the isCompanyRole method", () => {
      const role = new Role(CurrentRole.admin);
      expect(role.isCompanyRole()).toBe(false);
    });
  });
});
