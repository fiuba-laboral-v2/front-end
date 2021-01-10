import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

describe("OffersFilter", () => {
  describe("Getters", () => {
    describe("getCompanyName", () => {
      it("returns name from url search params", () => {
        const filter = new OffersFilter("nombre-de-empresa=Devartis");
        expect(filter.getCompanyName()).toEqual("Devartis");
      });

      it("returns an empty string when no companyName is set", () => {
        const filter = new OffersFilter("nombre-de-empresa&asd=qwe");
        expect(filter.getCompanyName()).toEqual("");
      });

      it("returns null if the companyName is not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getCompanyName()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getCompanyName()).toBeUndefined();
      });
    });

    describe("getBusinessSector", () => {
      it("returns businessSector from url search params", () => {
        const filter = new OffersFilter("rubro=Tecnología");
        expect(filter.getBusinessSector()).toEqual("Tecnología");
      });

      it("returns an empty string when no businessSector is set", () => {
        const filter = new OffersFilter("rubro&asd=qwe");
        expect(filter.getBusinessSector()).toEqual("");
      });

      it("returns null if the businessSector is not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getBusinessSector()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getBusinessSector()).toBeUndefined();
      });
    });

    describe("getCareerCodes", () => {
      it("gets career codes from url search params", () => {
        const filter = new OffersFilter("carreras=1-2-3");
        expect(filter.getCareerCodes()).toEqual(["1", "2", "3"]);
      });

      it("returns undefined when no career is set", () => {
        const filter = new OffersFilter("carreras=&asd=qwe");
        expect(filter.getCareerCodes()).toBeUndefined();
      });

      it("returns undefined when careers are not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getCareerCodes()).toBeUndefined();
      });

      it("returns undefined when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getCareerCodes()).toBeUndefined();
      });

      it("returns undefined when career has only dashes", () => {
        const filter = new OffersFilter("carreras=--");
        expect(filter.getCareerCodes()).toBeUndefined();
      });
    });

    describe("getTitle", () => {
      it("returns title from url search params", () => {
        const filter = new OffersFilter("nombre-del-puesto=Desarrollador Java");
        expect(filter.getTitle()).toEqual("Desarrollador Java");
      });

      it("returns an empty string when no title is set", () => {
        const filter = new OffersFilter("nombre-del-puesto&asd=qwe");
        expect(filter.getTitle()).toEqual("");
      });

      it("returns null if the title is not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getTitle()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getTitle()).toBeUndefined();
      });
    });

    describe("getApprovalStatus", () => {
      it("returns an approved status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion=approved");
        expect(filter.getApprovalStatus()).toEqual(ApprovalStatus.approved);
      });

      it("returns a pending status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion=pending");
        expect(filter.getApprovalStatus()).toEqual(ApprovalStatus.pending);
      });

      it("returns a rejected status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion=rejected");
        expect(filter.getApprovalStatus()).toEqual(ApprovalStatus.rejected);
      });

      it("returns undefined if no approvalStatus is set", () => {
        const filter = new OffersFilter("nombre-del-puesto&asd=qwe");
        expect(filter.getApprovalStatus()).toBeUndefined();
      });

      it("returns null if the approvalStatus is not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getApprovalStatus()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getApprovalStatus()).toBeUndefined();
      });
    });
  });

  describe("setFilter", () => {
    it("sets all values", () => {
      const filter = new OffersFilter();
      const attributes = {
        companyName: "Devartis",
        businessSector: "Servicios",
        title: "Ruby Junior",
        approvalStatus: ApprovalStatus.approved,
        careerCodes: ["1", "23"]
      };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets companyName", () => {
      const filter = new OffersFilter();
      const attributes = { companyName: "Devartis" };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets businessSector", () => {
      const filter = new OffersFilter();
      const attributes = { businessSector: "Viajes" };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets title", () => {
      const filter = new OffersFilter();
      const attributes = { title: "Ruby senior" };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets approvalStatus", () => {
      const filter = new OffersFilter();
      const attributes = { approvalStatus: ApprovalStatus.pending };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets careerCodes", () => {
      const filter = new OffersFilter();
      const attributes = { careerCodes: ["1", "2"] };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });
  });

  describe("clear", () => {
    it("clears all filters", () => {
      const filter = new OffersFilter();
      filter.setValues({
        companyName: "Devartis",
        businessSector: "Servicios",
        title: "Ruby Junior",
        approvalStatus: ApprovalStatus.approved,
        careerCodes: ["1", "23"]
      });
      filter.clear();
      expect(filter.getValues()).toEqual({});
    });
  });
});
