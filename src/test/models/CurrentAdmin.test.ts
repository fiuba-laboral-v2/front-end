import { CurrentAdmin } from "$models/CurrentAdmin";
import { Offer } from "$models/Offer";
import { Secretary } from "$interfaces/Secretary";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantType } from "$interfaces/Applicant";

describe("CurrentAdmin", () => {
  const generateAttributes = (secretary: Secretary) => ({
    user: { uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da" },
    secretary
  });

  it("creates an extension current admin user", () => {
    const attributes = generateAttributes(Secretary.extension);
    const currentAdmin = CurrentAdmin(attributes);
    expect(currentAdmin).toEqual(expect.objectContaining(attributes));
  });

  it("creates a graduados current admin user", () => {
    const attributes = generateAttributes(Secretary.graduados);
    const currentAdmin = CurrentAdmin(attributes);
    expect(currentAdmin).toEqual(expect.objectContaining(attributes));
  });

  describe("isGraduados", () => {
    it("returns true if the CurrentAdmin is from graduados secretary", () => {
      const attributes = generateAttributes(Secretary.graduados);
      const currentAdmin = CurrentAdmin(attributes);
      expect(currentAdmin.isGraduados()).toBe(true);
    });

    it("returns false if the CurrentAdmin is not from graduados secretary", () => {
      const attributes = generateAttributes(Secretary.extension);
      const currentAdmin = CurrentAdmin(attributes);
      expect(currentAdmin.isGraduados()).toBe(false);
    });
  });

  describe("isExtension", () => {
    it("returns true if the CurrentAdmin is from extension secretary", () => {
      const attributes = generateAttributes(Secretary.extension);
      const currentAdmin = CurrentAdmin(attributes);
      expect(currentAdmin.isExtension()).toBe(true);
    });

    it("returns false if the CurrentAdmin is not from extension secretary", () => {
      const attributes = generateAttributes(Secretary.graduados);
      const currentAdmin = CurrentAdmin(attributes);
      expect(currentAdmin.isExtension()).toBe(false);
    });
  });

  describe("canModerateOffer", () => {
    const createOffer = (targetApplicantType: ApplicantType) =>
      Offer({
        uuid: "d3208f27-7404-4396-b8a1-88037d493989",
        company: {
          companyName: "Devartis",
          cuit: "30711819017",
          logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
          uuid: "2005b62f-359b-4218-a673-e325fb4a06ef",
          businessName: "businessName",
          createdAt: "createdAt",
          updatedAt: "updatedAt",
          approvalStatus: ApprovalStatus.approved,
          users: []
        },
        targetApplicantType,
        graduadosApprovalStatus: ApprovalStatus.approved,
        extensionApprovalStatus: ApprovalStatus.approved,
        graduatesExpirationDateTime: "2020-12-04T16:57:07.333Z",
        studentsExpirationDateTime: "2020-12-04T16:57:07.333Z",
        createdAt: "2020-12-04T16:57:07.333Z",
        updatedAt: "2020-12-04T16:57:07.333Z",
        careers: [],
        sections: [],
        title: "title",
        description: "description",
        hoursPerDay: 6,
        isInternship: false,
        minimumSalary: 10000,
        maximumSalary: 10000,
        _form: []
      });

    describe("Extension Admin", () => {
      const currentExtensionAdmin = CurrentAdmin(generateAttributes(Secretary.extension));

      it("returns true if the offer targets both", () => {
        const offer = createOffer(ApplicantType.both);
        expect(currentExtensionAdmin.canModerateOffer(offer)).toBe(true);
      });

      it("returns true if the offer targets students", () => {
        const offer = createOffer(ApplicantType.student);
        expect(currentExtensionAdmin.canModerateOffer(offer)).toBe(true);
      });

      it("returns false if the offer targets graduates", () => {
        const offer = createOffer(ApplicantType.graduate);
        expect(currentExtensionAdmin.canModerateOffer(offer)).toBe(false);
      });
    });

    describe("Graduados Admin", () => {
      const currentGraduadosAdmin = CurrentAdmin(generateAttributes(Secretary.graduados));

      it("returns true if the offer targets both", () => {
        const offer = createOffer(ApplicantType.both);
        expect(currentGraduadosAdmin.canModerateOffer(offer)).toBe(true);
      });

      it("returns true if the offer targets graduados", () => {
        const offer = createOffer(ApplicantType.graduate);
        expect(currentGraduadosAdmin.canModerateOffer(offer)).toBe(true);
      });

      it("returns false if the offer targets students", () => {
        const offer = createOffer(ApplicantType.student);
        expect(currentGraduadosAdmin.canModerateOffer(offer)).toBe(false);
      });
    });
  });
});
