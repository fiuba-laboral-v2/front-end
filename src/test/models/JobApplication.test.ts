import { ApplicantType } from "$interfaces/Applicant";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IOfferAttributes } from "$interfaces/Offer";
import { IJobApplicationAttributes } from "$interfaces/JobApplication";
import { JobApplication } from "$models/JobApplication";
import moment from "moment";
import { Secretary } from "../../interfaces/Secretary";

describe("JobApplication", () => {
  const tomorrow = moment().endOf("day").add(1, "days").format("YYYY-MM-DD HH:mm:ss").toString();

  const offerAttributes: IOfferAttributes = {
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
    targetApplicantType: ApplicantType.both,
    graduadosApprovalStatus: ApprovalStatus.approved,
    extensionApprovalStatus: ApprovalStatus.approved,
    graduatesExpirationDateTime: tomorrow,
    studentsExpirationDateTime: tomorrow,
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
  };

  const jobApplicationAttributes: IJobApplicationAttributes = {
    uuid: "d3208f27-7404-4396-b8a1-88037d493989",
    createdAt: "2020-12-04T16:57:07.333Z",
    updatedAt: "2020-12-04T16:57:07.333Z",
    approvalStatus: ApprovalStatus.approved,
    applicant: {
      uuid: "d3208f27-7404-4396-b8a1-88037d493989",
      user: {
        name: "name",
        surname: "surname",
        email: "email",
        dni: "dni"
      },
      createdAt: "2020-12-04T16:57:07.333Z",
      updatedAt: "2020-12-04T16:57:07.333Z",
      padron: 123,
      approvalStatus: ApprovalStatus.approved,
      links: [],
      knowledgeSections: [],
      experienceSections: [],
      capabilities: [],
      careers: []
    },
    offer: offerAttributes
  };

  describe("hasAnApprovedApplicant", () => {
    it("returns true if the applicant is approved", () => {
      const jobApplication = JobApplication(jobApplicationAttributes);
      jobApplication.applicant.approvalStatus = ApprovalStatus.approved;
      expect(jobApplication.hasAnApprovedApplicant()).toBe(true);
    });

    it("returns false if the applicant is rejected", () => {
      const jobApplication = JobApplication(jobApplicationAttributes);
      jobApplication.applicant.approvalStatus = ApprovalStatus.rejected;
      expect(jobApplication.hasAnApprovedApplicant()).toBe(false);
    });

    it("returns false if the applicant is pending", () => {
      const jobApplication = JobApplication(jobApplicationAttributes);
      jobApplication.applicant.approvalStatus = ApprovalStatus.pending;
      expect(jobApplication.hasAnApprovedApplicant()).toBe(false);
    });
  });

  describe("hasAnApprovedOffer", () => {
    describe("Extension secretary", () => {
      const secretary = Secretary.extension;

      it("returns true if offer is approved", () => {
        const jobApplication = JobApplication(jobApplicationAttributes);
        jobApplicationAttributes.offer.extensionApprovalStatus = ApprovalStatus.approved;
        expect(jobApplication.hasAnApprovedOffer(secretary)).toBe(true);
      });

      it("returns false if offer is rejected", () => {
        const jobApplication = JobApplication(jobApplicationAttributes);
        jobApplicationAttributes.offer.extensionApprovalStatus = ApprovalStatus.rejected;
        expect(jobApplication.hasAnApprovedOffer(secretary)).toBe(false);
      });

      it("returns false if offer is pending", () => {
        const jobApplication = JobApplication(jobApplicationAttributes);
        jobApplicationAttributes.offer.extensionApprovalStatus = ApprovalStatus.pending;
        expect(jobApplication.hasAnApprovedOffer(secretary)).toBe(false);
      });
    });

    describe("Graduados secretary", () => {
      const secretary = Secretary.graduados;

      it("returns true if offer is approved", () => {
        const jobApplication = JobApplication(jobApplicationAttributes);
        jobApplicationAttributes.offer.graduadosApprovalStatus = ApprovalStatus.approved;
        expect(jobApplication.hasAnApprovedOffer(secretary)).toBe(true);
      });

      it("returns false if offer is rejected", () => {
        const jobApplication = JobApplication(jobApplicationAttributes);
        jobApplicationAttributes.offer.graduadosApprovalStatus = ApprovalStatus.rejected;
        expect(jobApplication.hasAnApprovedOffer(secretary)).toBe(false);
      });

      it("returns false if offer is pending", () => {
        const jobApplication = JobApplication(jobApplicationAttributes);
        jobApplicationAttributes.offer.graduadosApprovalStatus = ApprovalStatus.pending;
        expect(jobApplication.hasAnApprovedOffer(secretary)).toBe(false);
      });
    });
  });
});
