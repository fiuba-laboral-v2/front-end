import { ApplicantType } from "$interfaces/Applicant";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IPersistanceMyOffer, IPersistanceOffer } from "$interfaces/Offer";
import { Secretary } from "$interfaces/Secretary";
import { Offer } from "$models/Offer";

describe("CurrentUser", () => {
  const offerAttributes = {
    uuid: "d3208f27-7404-4396-b8a1-88037d493989",
    company: {
      companyName: "Devartis",
      cuit: "30711819017",
      logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD",
      uuid: "2005b62f-359b-4218-a673-e325fb4a06ef",
      businessName: "businessName",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      approvalStatus: "approvalStatus",
      users: []
    },
    targetApplicantType: ApplicantType.both,
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
  };

  it("returns a valid Offer", () => {
    const offer = Offer(offerAttributes as IPersistanceOffer);

    expect(offer.isTargetToBoth()).toBe(true);
    expect(offer.isTargetToGraduates()).toBe(false);
    expect(offer.isTargetToStudents()).toBe(false);
  });

  it("returns a valid MyOffer", () => {
    const offer = Offer<IPersistanceMyOffer>({
      ...offerAttributes,
      hasApplied: true
    } as IPersistanceMyOffer);

    expect(offer.hasApplied).toBe(true);
  });

  it("adds a method to ask if is target for Students", () => {
    const offer = Offer(offerAttributes as IPersistanceOffer);

    expect(offer.isTargetToStudents).not.toBeUndefined();
    expect(offer.isTargetToStudents()).toBe(false);
  });

  it("adds a method to ask if is target for Graduates", () => {
    const offer = Offer(offerAttributes as IPersistanceOffer);

    expect(offer.isTargetToGraduates).not.toBeUndefined();
    expect(offer.isTargetToGraduates()).toBe(false);
  });

  it("adds a method to ask if is target for Both", () => {
    const offer = Offer(offerAttributes as IPersistanceOffer);

    expect(offer.isTargetToBoth).not.toBeUndefined();
    expect(offer.isTargetToBoth()).toBe(true);
  });

  it("adds a method to get the expiration date given a secretary", () => {
    const offer = Offer(offerAttributes as IPersistanceOffer);

    expect(offer.getExpirationDateFor).not.toBeUndefined();
    expect(offer.getExpirationDateFor(Secretary.extension)).toBe(
      offerAttributes.studentsExpirationDateTime
    );
    expect(offer.getExpirationDateFor(Secretary.graduados)).toBe(
      offerAttributes.graduatesExpirationDateTime
    );
  });

  it("adds a method to know if the offer has expired for a certain secretary", () => {
    const offer = Offer(offerAttributes as IPersistanceOffer);

    expect(offer.hasExpiredFor).not.toBeUndefined();
    expect(offer.hasExpiredFor(Secretary.extension)).toBe(true);
    expect(offer.hasExpiredFor(Secretary.graduados)).toBe(true);
  });
});
