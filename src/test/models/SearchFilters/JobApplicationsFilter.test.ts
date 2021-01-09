import { JobApplicationsFilter } from "$models/SearchFilters/JobApplicationsFilter";

describe("JobApplicationsFilter", () => {
  describe("Getters", () => {
    describe("getCompanyName", () => {
      it("returns name from url search params", () => {
        const applicantsFilter = new JobApplicationsFilter("nombre-de-empresa=Devartis");
        expect(applicantsFilter.getCompanyName()).toEqual("Devartis");
      });

      it("returns an empty string when no companyName is set", () => {
        const applicantsFilter = new JobApplicationsFilter("nombre-de-empresa&asd=qwe");
        expect(applicantsFilter.getCompanyName()).toEqual("");
      });

      it("returns null if the companyName is not in search params", () => {
        const applicantsFilter = new JobApplicationsFilter("asd=qwe");
        expect(applicantsFilter.getCompanyName()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const applicantsFilter = new JobApplicationsFilter("");
        expect(applicantsFilter.getCompanyName()).toBeUndefined();
      });
    });

    describe("getApplicantName", () => {
      it("returns applicantName from url search params", () => {
        const applicantsFilter = new JobApplicationsFilter("nombre-de-postulante=Brian");
        expect(applicantsFilter.getApplicantName()).toEqual("Brian");
      });

      it("returns an empty string when no applicantName is set", () => {
        const applicantsFilter = new JobApplicationsFilter("nombre-de-postulante&asd=qwe");
        expect(applicantsFilter.getApplicantName()).toEqual("");
      });

      it("returns null if the applicantName is not in search params", () => {
        const applicantsFilter = new JobApplicationsFilter("asd=qwe");
        expect(applicantsFilter.getApplicantName()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const applicantsFilter = new JobApplicationsFilter("");
        expect(applicantsFilter.getApplicantName()).toBeUndefined();
      });
    });

    describe("getOfferTitle", () => {
      it("returns offerTitle from url search params", () => {
        const applicantsFilter = new JobApplicationsFilter("nombre-del-puesto=Java dev");
        expect(applicantsFilter.getOfferTitle()).toEqual("Java dev");
      });

      it("returns an empty string when no offerTitle is set", () => {
        const applicantsFilter = new JobApplicationsFilter("nombre-del-puesto&asd=qwe");
        expect(applicantsFilter.getOfferTitle()).toEqual("");
      });

      it("returns null if the offerTitle is not in search params", () => {
        const applicantsFilter = new JobApplicationsFilter("asd=qwe");
        expect(applicantsFilter.getOfferTitle()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const applicantsFilter = new JobApplicationsFilter("");
        expect(applicantsFilter.getOfferTitle()).toBeUndefined();
      });
    });
  });

  describe("setFilter", () => {
    it("sets companyName, applicantName and offerTitle", () => {
      const applicantsFilter = new JobApplicationsFilter();
      const attributes = {
        companyName: "Devartis",
        applicantName: "Brian Wilson",
        offerTitle: "Desarrollador Java"
      };
      applicantsFilter.setValues(attributes);
      expect(applicantsFilter.getValues()).toEqual(attributes);
    });

    it("sets companyName", () => {
      const applicantsFilter = new JobApplicationsFilter();
      const attributes = { companyName: "Devartis" };
      applicantsFilter.setValues(attributes);
      expect(applicantsFilter.getValues()).toEqual(attributes);
    });

    it("sets applicantName", () => {
      const applicantsFilter = new JobApplicationsFilter();
      const attributes = { applicantName: "Nina Simone" };
      applicantsFilter.setValues(attributes);
      expect(applicantsFilter.getValues()).toEqual(attributes);
    });

    it("sets offerTitle", () => {
      const applicantsFilter = new JobApplicationsFilter();
      const attributes = { offerTitle: "Desarrollador Java" };
      applicantsFilter.setValues(attributes);
      expect(applicantsFilter.getValues()).toEqual(attributes);
    });
  });

  describe("clear", () => {
    it("clears all filters", () => {
      const applicantsFilter = new JobApplicationsFilter();
      applicantsFilter.setValues({
        companyName: "Devartis",
        applicantName: "Brian Wilson",
        offerTitle: "Desarrollador Java"
      });
      applicantsFilter.clear();
      expect(applicantsFilter.getValues()).toEqual({});
    });
  });
});
