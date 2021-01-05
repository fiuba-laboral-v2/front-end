import { ApplicantsFilter } from "$models/ApplicantsFilter";
import { ApplicantType } from "$interfaces/Applicant";

describe("ApplicantsFilter", () => {
  describe("getCareerCodes", () => {
    it("gets career codes from url search params", () => {
      const applicantsFilter = new ApplicantsFilter("carreras=1-2-3");
      expect(applicantsFilter.getCareerCodes()).toEqual(["1", "2", "3"]);
    });

    it("returns an empty array when no career is set", () => {
      const applicantsFilter = new ApplicantsFilter("carreras=&asd=qwe");
      expect(applicantsFilter.getCareerCodes()).toEqual([]);
    });

    it("returns an empty array when careers are not in search params", () => {
      const applicantsFilter = new ApplicantsFilter("asd=qwe");
      expect(applicantsFilter.getCareerCodes()).toEqual([]);
    });

    it("returns an empty array when search params are empty", () => {
      const applicantsFilter = new ApplicantsFilter("");
      expect(applicantsFilter.getCareerCodes()).toEqual([]);
    });

    it("returns an empty array when career has only dashes", () => {
      const applicantsFilter = new ApplicantsFilter("carreras=--");
      expect(applicantsFilter.getCareerCodes()).toEqual([]);
    });
  });

  describe("getName", () => {
    it("returns name from url search params", () => {
      const applicantsFilter = new ApplicantsFilter("nombre=eric-clapton");
      expect(applicantsFilter.getName()).toEqual("eric-clapton");
    });

    it("returns an empty string when no name is set", () => {
      const applicantsFilter = new ApplicantsFilter("nombre=&asd=qwe");
      expect(applicantsFilter.getName()).toEqual("");
    });

    it("returns null if the name is not in search params", () => {
      const applicantsFilter = new ApplicantsFilter("asd=qwe");
      expect(applicantsFilter.getName()).toBeUndefined();
    });

    it("returns null when search params are empty", () => {
      const applicantsFilter = new ApplicantsFilter("");
      expect(applicantsFilter.getName()).toBeUndefined();
    });
  });

  describe("getApplicantType", () => {
    it("returns student applicantType from url search params", () => {
      const applicantsFilter = new ApplicantsFilter("tipo_de_postulante=student");
      expect(applicantsFilter.getApplicantType()).toEqual(ApplicantType.student);
    });

    it("returns graduate applicantType from url search params", () => {
      const applicantsFilter = new ApplicantsFilter("tipo_de_postulante=graduate");
      expect(applicantsFilter.getApplicantType()).toEqual(ApplicantType.graduate);
    });

    it("returns null empty when no name is set", () => {
      const applicantsFilter = new ApplicantsFilter("tipo_de_postulante=&asd=qwe");
      expect(applicantsFilter.getApplicantType()).toBeUndefined();
    });

    it("returns null if the name is not in search params", () => {
      const applicantsFilter = new ApplicantsFilter("asd=qwe");
      expect(applicantsFilter.getApplicantType()).toBeUndefined();
    });

    it("returns null when search params are empty", () => {
      const applicantsFilter = new ApplicantsFilter("");
      expect(applicantsFilter.getApplicantType()).toBeUndefined();
    });
  });

  describe("setFilter", () => {
    it("sets careerCodes, name and applicantType", () => {
      const applicantsFilter = new ApplicantsFilter();
      applicantsFilter.setValues({
        name: "name",
        careerCodes: ["1"],
        applicantType: ApplicantType.student
      });
      expect(applicantsFilter.getCareerCodes()).toEqual(["1"]);
      expect(applicantsFilter.getName()).toEqual("name");
      expect(applicantsFilter.getApplicantType()).toEqual(ApplicantType.student);
    });

    it("sets careerCodes", () => {
      const applicantsFilter = new ApplicantsFilter();
      applicantsFilter.setValues({ careerCodes: ["1"] });
      expect(applicantsFilter.getCareerCodes()).toEqual(["1"]);
      expect(applicantsFilter.getName()).toBeUndefined();
      expect(applicantsFilter.getApplicantType()).toBeUndefined();
    });

    it("sets name", () => {
      const applicantsFilter = new ApplicantsFilter();
      applicantsFilter.setValues({ name: "name" });
      expect(applicantsFilter.getCareerCodes()).toEqual([]);
      expect(applicantsFilter.getName()).toEqual("name");
      expect(applicantsFilter.getApplicantType()).toBeUndefined();
    });

    it("sets applicantType", () => {
      const applicantsFilter = new ApplicantsFilter();
      applicantsFilter.setValues({ applicantType: ApplicantType.graduate });
      expect(applicantsFilter.getCareerCodes()).toEqual([]);
      expect(applicantsFilter.getName()).toBeUndefined();
      expect(applicantsFilter.getApplicantType()).toEqual(ApplicantType.graduate);
    });
  });
});
