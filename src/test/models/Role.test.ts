import { Role } from "$models/Role";
import { RoleName } from "$models/Role";

describe("Role", () => {
  describe("CompanyRole", () => {
    it("creates a company role", () => {
      const role = new Role(RoleName.Company);
      expect(role.name).toEqual(RoleName.Company);
    });

    it("returns true for the isCompanyRole method", () => {
      const role = new Role(RoleName.Company);
      expect(role.isCompanyRole()).toBe(true);
    });

    it("returns false for the isApplicantRole method", () => {
      const role = new Role(RoleName.Company);
      expect(role.isApplicantRole()).toBe(false);
    });

    it("returns false for the isAdminRole method", () => {
      const role = new Role(RoleName.Company);
      expect(role.isAdminRole()).toBe(false);
    });
  });

  describe("ApplicantRole", () => {
    it("creates an applicant role", () => {
      const role = new Role(RoleName.Applicant);
      expect(role.name).toEqual(RoleName.Applicant);
    });

    it("returns true for the isApplicantRole method", () => {
      const role = new Role(RoleName.Applicant);
      expect(role.isApplicantRole()).toBe(true);
    });

    it("returns false for the isCompanyRole method", () => {
      const role = new Role(RoleName.Applicant);
      expect(role.isCompanyRole()).toBe(false);
    });

    it("returns false for the isAdminRole method", () => {
      const role = new Role(RoleName.Applicant);
      expect(role.isAdminRole()).toBe(false);
    });
  });

  describe("AdminRole", () => {
    it("creates an admin role", () => {
      const role = new Role(RoleName.Admin);
      expect(role.name).toEqual(RoleName.Admin);
    });

    it("returns true for the isAdminRole method", () => {
      const role = new Role(RoleName.Admin);
      expect(role.isAdminRole()).toBe(true);
    });

    it("returns false for the isApplicantRole method", () => {
      const role = new Role(RoleName.Admin);
      expect(role.isApplicantRole()).toBe(false);
    });

    it("returns false for the isCompanyRole method", () => {
      const role = new Role(RoleName.Admin);
      expect(role.isCompanyRole()).toBe(false);
    });
  });
});
