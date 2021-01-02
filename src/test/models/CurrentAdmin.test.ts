import { CurrentAdmin } from "$models/CurrentAdmin";
import { Offer } from "$models/Offer";
import { Secretary } from "$interfaces/Secretary";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ApplicantType, IApplicant, IApplicantCareer } from "$interfaces/Applicant";
import { IOfferAttributes } from "$interfaces/Offer";
import { JobApplication } from "$models/JobApplication";
import { IJobApplicationAttributes } from "$interfaces/JobApplication";

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

  describe("moderation", () => {
    const createApplicant = (careers: IApplicantCareer[]): IApplicant => ({
      uuid: "d3208f27-7404-4396-b8a1-88037d493989",
      user: {
        uuid: "d3208f27-7404-4396-b8a1-88037d493989",
        name: "name",
        surname: "surname",
        email: "email@gmail.com",
        dni: "234"
      },
      padron: 88888,
      description: "description",
      createdAt: "2020-12-04T16:57:07.333Z",
      updatedAt: "2020-12-04T16:57:07.333Z",
      approvalStatus: ApprovalStatus.approved,
      careers,
      links: [],
      experienceSections: [],
      knowledgeSections: [],
      capabilities: []
    });

    const offerAttributes = (targetApplicantType: ApplicantType): IOfferAttributes => ({
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

    const createOffer = (targetApplicantType: ApplicantType) =>
      Offer(offerAttributes(targetApplicantType));

    const applicantCareersWithOneGraduation = [
      {
        isGraduate: true,
        career: {
          code: "code1",
          description: "description"
        }
      },
      {
        isGraduate: false,
        approvedSubjectCount: 44,
        currentCareerYear: 5,
        career: {
          code: "code1",
          description: "description"
        }
      }
    ];

    const applicantCareersWithNoGraduation = [
      {
        isGraduate: false,
        approvedSubjectCount: 44,
        currentCareerYear: 5,
        career: {
          code: "code1",
          description: "description"
        }
      }
    ];

    describe("canModerateOffer", () => {
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

        it("returns false if the offer is from a rejected company", () => {
          const offer = createOffer(ApplicantType.graduate);
          offer.company.approvalStatus = ApprovalStatus.rejected;
          expect(currentExtensionAdmin.canModerateOffer(offer)).toBe(false);
        });

        it("returns false if the offer is from a pending company", () => {
          const offer = createOffer(ApplicantType.graduate);
          offer.company.approvalStatus = ApprovalStatus.pending;
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

        it("returns false if the offer is from a rejected company", () => {
          const offer = createOffer(ApplicantType.graduate);
          offer.company.approvalStatus = ApprovalStatus.rejected;
          expect(currentGraduadosAdmin.canModerateOffer(offer)).toBe(false);
        });

        it("returns false if the offer is from a pending company", () => {
          const offer = createOffer(ApplicantType.graduate);
          offer.company.approvalStatus = ApprovalStatus.pending;
          expect(currentGraduadosAdmin.canModerateOffer(offer)).toBe(false);
        });
      });
    });

    describe("canModerateJobApplication", () => {
      const student = createApplicant(applicantCareersWithNoGraduation);
      const graduate = createApplicant(applicantCareersWithOneGraduation);

      const jobApplicationAttributes = (applicant?: IApplicant): IJobApplicationAttributes => ({
        uuid: "d3208f27-7404-4396-b8a1-88037d493989",
        createdAt: "2020-12-04T16:57:07.333Z",
        updatedAt: "2020-12-04T16:57:07.333Z",
        approvalStatus: ApprovalStatus.approved,
        applicant: applicant || createApplicant([]),
        offer: offerAttributes(ApplicantType.both)
      });

      describe("Extension Admin", () => {
        const currentExtensionAdmin = CurrentAdmin(generateAttributes(Secretary.extension));

        it("returns true if the applicant is approved", () => {
          const attributes = jobApplicationAttributes(student);
          const jobApplication = JobApplication(attributes);
          expect(currentExtensionAdmin.canModerateJobApplication(jobApplication)).toBe(true);
        });

        it("returns false if the student is rejected", () => {
          const jobApplication = JobApplication(jobApplicationAttributes(student));
          jobApplication.applicant.approvalStatus = ApprovalStatus.rejected;
          expect(currentExtensionAdmin.canModerateJobApplication(jobApplication)).toBe(false);
        });

        it("returns false if the student is pending", () => {
          const jobApplication = JobApplication(jobApplicationAttributes(student));
          jobApplication.applicant.approvalStatus = ApprovalStatus.pending;
          expect(currentExtensionAdmin.canModerateJobApplication(jobApplication)).toBe(false);
        });

        it("returns false if the applicant has graduated", () => {
          const jobApplication = JobApplication(jobApplicationAttributes(graduate));
          expect(currentExtensionAdmin.canModerateJobApplication(jobApplication)).toBe(false);
        });
      });

      describe("Graduados Admin", () => {
        const currentGraduadosAdmin = CurrentAdmin(generateAttributes(Secretary.graduados));

        it("returns true if the applicant is approved", () => {
          const attributes = jobApplicationAttributes(graduate);
          const jobApplication = JobApplication(attributes);
          expect(currentGraduadosAdmin.canModerateJobApplication(jobApplication)).toBe(true);
        });

        it("returns false if the student is rejected", () => {
          const jobApplication = JobApplication(jobApplicationAttributes(graduate));
          jobApplication.applicant.approvalStatus = ApprovalStatus.rejected;
          expect(currentGraduadosAdmin.canModerateJobApplication(jobApplication)).toBe(false);
        });

        it("returns false if the student is pending", () => {
          const jobApplication = JobApplication(jobApplicationAttributes(graduate));
          jobApplication.applicant.approvalStatus = ApprovalStatus.pending;
          expect(currentGraduadosAdmin.canModerateJobApplication(jobApplication)).toBe(false);
        });

        it("returns false if the applicant has not graduated", () => {
          const jobApplication = JobApplication(jobApplicationAttributes(student));
          expect(currentGraduadosAdmin.canModerateJobApplication(jobApplication)).toBe(false);
        });
      });
    });

    describe("canModerateApplicant", () => {
      describe("Extension Admin", () => {
        const currentExtensionAdmin = CurrentAdmin(generateAttributes(Secretary.extension));

        it("returns false if the applicant has graduated from at least one career", () => {
          const applicant = createApplicant(applicantCareersWithOneGraduation);
          expect(currentExtensionAdmin.canModerateApplicant(applicant)).toBe(false);
        });

        it("returns true if the applicant has not graduated yet", () => {
          const applicant = createApplicant(applicantCareersWithNoGraduation);
          expect(currentExtensionAdmin.canModerateApplicant(applicant)).toBe(true);
        });
      });

      describe("Graduados Admin", () => {
        const currentGraduadosAdmin = CurrentAdmin(generateAttributes(Secretary.graduados));

        it("returns true if the applicant has graduated from at least one career", () => {
          const applicant = createApplicant(applicantCareersWithOneGraduation);
          expect(currentGraduadosAdmin.canModerateApplicant(applicant)).toBe(true);
        });

        it("returns true if the applicant has not graduated yet", () => {
          const applicant = createApplicant(applicantCareersWithNoGraduation);
          expect(currentGraduadosAdmin.canModerateApplicant(applicant)).toBe(false);
        });
      });
    });
  });
});
