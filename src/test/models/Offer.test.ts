import { ApplicantType } from "$interfaces/Applicant";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IMyOfferAttributes, IOfferAttributes } from "$interfaces/Offer";
import { Secretary } from "$interfaces/Secretary";
import { Offer } from "$models/Offer";
import moment from "moment";

describe("CurrentUser", () => {
  const tomorrow = moment().endOf("day").add(1, "days").format("YYYY-MM-DD HH:mm:ss").toString();
  const yesterday = moment()
    .startOf("day")
    .subtract(1, "day")
    .format("YYYY-MM-DD HH:mm:ss")
    .toString();

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

  it("returns a valid Offer", () => {
    const offer = Offer(offerAttributes);

    expect(offer).toMatchObject(offerAttributes);
    expect(offer.isTargetingBoth()).toBe(true);
    expect(offer.isTargetingOnlyGraduates()).toBe(false);
    expect(offer.isTargetingOnlyStudents()).toBe(false);
  });

  it("returns a valid MyOffer", () => {
    const offer = Offer<IMyOfferAttributes>({
      ...offerAttributes,
      hasApplied: true
    });

    expect(offer).toMatchObject(offerAttributes);
    expect(offer.hasApplied).toBe(true);
  });

  describe("has a method isApprovedFor", () => {
    describe("when the secretary of graduados is pass", () => {
      it("returns true if graduadosApprovalStatus is approved", () => {
        const offer = Offer(offerAttributes);

        expect(offer.isApprovedFor(Secretary.graduados)).toBe(true);
      });

      it("returns false if graduadosApprovalStatus is pending", () => {
        const offer = Offer({
          ...offerAttributes,
          graduadosApprovalStatus: ApprovalStatus.pending
        });

        expect(offer.isApprovedFor(Secretary.graduados)).toBe(false);
      });

      it("returns false if graduadosApprovalStatus is rejected", () => {
        const offer = Offer({
          ...offerAttributes,
          graduadosApprovalStatus: ApprovalStatus.rejected
        });

        expect(offer.isApprovedFor(Secretary.graduados)).toBe(false);
      });
    });

    describe("when the secretary of extension is pass", () => {
      it("returns true if extensionApprovalStatus is approved", () => {
        const offer = Offer(offerAttributes);

        expect(offer.isApprovedFor(Secretary.extension)).toBe(true);
      });

      it("returns false if extensionApprovalStatus is pending", () => {
        const offer = Offer({
          ...offerAttributes,
          extensionApprovalStatus: ApprovalStatus.pending
        });

        expect(offer.isApprovedFor(Secretary.extension)).toBe(false);
      });

      it("returns false if extensionApprovalStatus is rejected", () => {
        const offer = Offer({
          ...offerAttributes,
          extensionApprovalStatus: ApprovalStatus.rejected
        });

        expect(offer.isApprovedFor(Secretary.extension)).toBe(false);
      });
    });
  });

  describe("has a method isRejectedFor", () => {
    describe("when the secretary of graduados is pass", () => {
      it("returns false if graduadosApprovalStatus is approved", () => {
        const offer = Offer(offerAttributes);

        expect(offer.isRejectedFor(Secretary.graduados)).toBe(false);
      });

      it("returns false if graduadosApprovalStatus is pending", () => {
        const offer = Offer({
          ...offerAttributes,
          graduadosApprovalStatus: ApprovalStatus.pending
        });

        expect(offer.isRejectedFor(Secretary.graduados)).toBe(false);
      });

      it("returns true if graduadosApprovalStatus is rejected", () => {
        const offer = Offer({
          ...offerAttributes,
          graduadosApprovalStatus: ApprovalStatus.rejected
        });

        expect(offer.isRejectedFor(Secretary.graduados)).toBe(true);
      });
    });

    describe("when the secretary of extension is pass", () => {
      it("returns false if extensionApprovalStatus is approved", () => {
        const offer = Offer(offerAttributes);

        expect(offer.isRejectedFor(Secretary.extension)).toBe(false);
      });

      it("returns false if extensionApprovalStatus is pending", () => {
        const offer = Offer({
          ...offerAttributes,
          extensionApprovalStatus: ApprovalStatus.pending
        });

        expect(offer.isRejectedFor(Secretary.extension)).toBe(false);
      });

      it("returns true if extensionApprovalStatus is rejected", () => {
        const offer = Offer({
          ...offerAttributes,
          extensionApprovalStatus: ApprovalStatus.rejected
        });

        expect(offer.isRejectedFor(Secretary.extension)).toBe(true);
      });
    });
  });

  describe("has a method isTargetingOnlyStudents", () => {
    it("returns false if targetApplicantType is both", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.both });

      expect(offer.isTargetingOnlyStudents()).toBe(false);
    });

    it("returns true if targetApplicantType is student", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.isTargetingOnlyStudents()).toBe(true);
    });

    it("returns false if targetApplicantType is graduate", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.graduate });

      expect(offer.isTargetingOnlyStudents()).toBe(false);
    });
  });

  describe("has a method isTargetingStudents", () => {
    it("returns true if targetApplicantType is both", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.both });

      expect(offer.isTargetingStudents()).toBe(true);
    });

    it("returns true if targetApplicantType is student", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.isTargetingStudents()).toBe(true);
    });

    it("returns false if targetApplicantType is graduate", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.graduate });

      expect(offer.isTargetingStudents()).toBe(false);
    });
  });

  describe("has a method isTargetingOnlyGraduates", () => {
    it("returns false if targetApplicantType is both", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.both });

      expect(offer.isTargetingOnlyGraduates()).toBe(false);
    });

    it("returns true if targetApplicantType is graduate", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.graduate });

      expect(offer.isTargetingOnlyGraduates()).toBe(true);
    });

    it("returns false if targetApplicantType is student", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.isTargetingOnlyGraduates()).toBe(false);
    });
  });

  describe("has a method isTargetingGraduates", () => {
    it("returns true if targetApplicantType is both", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.both });

      expect(offer.isTargetingGraduates()).toBe(true);
    });

    it("returns true if targetApplicantType is graduate", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.graduate });

      expect(offer.isTargetingGraduates()).toBe(true);
    });

    it("returns false if targetApplicantType is student", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.isTargetingGraduates()).toBe(false);
    });
  });

  describe("has a method isTargetingBoth", () => {
    it("returns false if is not targeting both", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.isTargetingBoth()).toBe(false);
    });

    it("returns true if is targeting both", () => {
      const offer = Offer(offerAttributes);

      expect(offer.isTargetingBoth()).toBe(true);
    });
  });

  describe("has a method getExpirationDateFor", () => {
    it("returns studentsExpirationDateTime when you pass the secretary of extension", () => {
      const offer = Offer(offerAttributes);

      expect(offer.getExpirationDateFor(Secretary.extension)).toStrictEqual(
        moment(offerAttributes.studentsExpirationDateTime!)
      );
    });

    it("returns graduatesExpirationDateTime when you pass the secretary of graduados", () => {
      const offer = Offer(offerAttributes);

      expect(offer.getExpirationDateFor(Secretary.graduados)).toStrictEqual(
        moment(offerAttributes.graduatesExpirationDateTime!)
      );
    });
  });

  describe("has a method hasExpiredFor", () => {
    describe("when you pass the secretary of extension", () => {
      it("returns true when the studentsExpirationDateTime is in the past", () => {
        const offer = Offer({ ...offerAttributes, studentsExpirationDateTime: yesterday });

        expect(offer.hasExpiredFor(Secretary.extension)).toBe(true);
      });

      it("returns false when the studentsExpirationDateTime is in the future", () => {
        const offer = Offer(offerAttributes);

        expect(offer.hasExpiredFor(Secretary.extension)).toBe(false);
      });
    });

    describe("when you pass the secretary of graduados", () => {
      it("returns true when the graduatesExpirationDateTime is in the past", () => {
        const offer = Offer({ ...offerAttributes, graduatesExpirationDateTime: yesterday });

        expect(offer.hasExpiredFor(Secretary.graduados)).toBe(true);
      });

      it("returns false when the graduatesExpirationDateTime is in the future", () => {
        const offer = Offer(offerAttributes);

        expect(offer.hasExpiredFor(Secretary.graduados)).toBe(false);
      });
    });
  });

  describe("has a method canExpireForStudents", () => {
    it("returns true if isTargetingStudents, is not rejected and didn't expired for students", () => {
      const offer = Offer(offerAttributes);

      expect(offer.canExpireForStudents()).toBe(true);
    });

    it("returns false if is targeting graduates", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.graduate });

      expect(offer.canExpireForStudents()).toBe(false);
    });

    it("returns false if extensionApprovalStatus is rejected", () => {
      const offer = Offer({ ...offerAttributes, extensionApprovalStatus: ApprovalStatus.rejected });

      expect(offer.canExpireForStudents()).toBe(false);
    });

    it("returns false if it's already expired", () => {
      const offer = Offer({ ...offerAttributes, studentsExpirationDateTime: yesterday });

      expect(offer.canExpireForStudents()).toBe(false);
    });
  });

  describe("has a method canExpireForGraduates", () => {
    it("returns true if isTargetingGraduates, is not rejected and didn't expired for graduates", () => {
      const offer = Offer(offerAttributes);

      expect(offer.canExpireForGraduates()).toBe(true);
    });

    it("returns false if is targeting student", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.canExpireForGraduates()).toBe(false);
    });

    it("returns false if graduadosApprovalStatus is rejected", () => {
      const offer = Offer({ ...offerAttributes, graduadosApprovalStatus: ApprovalStatus.rejected });

      expect(offer.canExpireForGraduates()).toBe(false);
    });

    it("returns false if it's already expired", () => {
      const offer = Offer({ ...offerAttributes, graduatesExpirationDateTime: yesterday });

      expect(offer.canExpireForGraduates()).toBe(false);
    });
  });

  describe("has a method canRepublishForGraduates", () => {
    it("returns true if isTargetingGraduates, is not rejected and it did expired for graduates", () => {
      const offer = Offer({ ...offerAttributes, graduatesExpirationDateTime: yesterday });

      expect(offer.canRepublishForGraduates()).toBe(true);
    });

    it("returns false if is targeting student", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.student });

      expect(offer.canRepublishForGraduates()).toBe(false);
    });

    it("returns false if graduadosApprovalStatus is rejected", () => {
      const offer = Offer({ ...offerAttributes, graduadosApprovalStatus: ApprovalStatus.rejected });

      expect(offer.canRepublishForGraduates()).toBe(false);
    });

    it("returns false if it didn't expire", () => {
      const offer = Offer({ ...offerAttributes, graduatesExpirationDateTime: tomorrow });

      expect(offer.canRepublishForGraduates()).toBe(false);
    });
  });

  describe("has a method canRepublishForStudents", () => {
    it("returns true if isTargetingStudents, is not rejected and it did expired for students", () => {
      const offer = Offer({ ...offerAttributes, studentsExpirationDateTime: yesterday });

      expect(offer.canRepublishForStudents()).toBe(true);
    });

    it("returns false if is targeting graduate", () => {
      const offer = Offer({ ...offerAttributes, targetApplicantType: ApplicantType.graduate });

      expect(offer.canRepublishForStudents()).toBe(false);
    });

    it("returns false if extensionApprovalStatus is rejected", () => {
      const offer = Offer({ ...offerAttributes, extensionApprovalStatus: ApprovalStatus.rejected });

      expect(offer.canRepublishForStudents()).toBe(false);
    });

    it("returns false if it didn't expire", () => {
      const offer = Offer({ ...offerAttributes, studentsExpirationDateTime: tomorrow });

      expect(offer.canRepublishForStudents()).toBe(false);
    });
  });
});
