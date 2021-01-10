import { OffersFilter } from "$models/SearchFilters/OffersFilter";
import { OfferStatus } from "../../../interfaces/Offer";

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

    describe("setStudentsStatus", () => {
      it("returns an approved status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-alumnos=approved");
        expect(filter.getStudentsStatus()).toEqual(OfferStatus.approved);
      });

      it("returns a pending status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-alumnos=pending");
        expect(filter.getStudentsStatus()).toEqual(OfferStatus.pending);
      });

      it("returns a rejected status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-alumnos=rejected");
        expect(filter.getStudentsStatus()).toEqual(OfferStatus.rejected);
      });

      it("returns an expired status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-alumnos=expired");
        expect(filter.getStudentsStatus()).toEqual(OfferStatus.expired);
      });

      it("returns undefined if no status is set", () => {
        const filter = new OffersFilter("nombre-del-puesto&asd=qwe");
        expect(filter.getStudentsStatus()).toBeUndefined();
      });

      it("returns null if the status is not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getStudentsStatus()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getStudentsStatus()).toBeUndefined();
      });
    });

    describe("getGraduatesStatus", () => {
      it("returns an approved status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-graduados=approved");
        expect(filter.getGraduatesStatus()).toEqual(OfferStatus.approved);
      });

      it("returns a pending status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-graduados=pending");
        expect(filter.getGraduatesStatus()).toEqual(OfferStatus.pending);
      });

      it("returns a rejected status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-graduados=rejected");
        expect(filter.getGraduatesStatus()).toEqual(OfferStatus.rejected);
      });

      it("returns an expired status from url search params", () => {
        const filter = new OffersFilter("estado-de-aprobacion-de-graduados=expired");
        expect(filter.getGraduatesStatus()).toEqual(OfferStatus.expired);
      });

      it("returns undefined if no status is set", () => {
        const filter = new OffersFilter("nombre-del-puesto&asd=qwe");
        expect(filter.getGraduatesStatus()).toBeUndefined();
      });

      it("returns null if the status is not in search params", () => {
        const filter = new OffersFilter("asd=qwe");
        expect(filter.getGraduatesStatus()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new OffersFilter("");
        expect(filter.getGraduatesStatus()).toBeUndefined();
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
        studentsStatus: OfferStatus.approved,
        graduatesStatus: OfferStatus.expired,
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

    it("sets studentsStatus", () => {
      const filter = new OffersFilter();
      const attributes = { studentsStatus: OfferStatus.pending };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets an undefined studentsStatus", () => {
      const filter = new OffersFilter();
      filter.setValues({ studentsStatus: undefined });
      expect(filter.getValues().studentsStatus).toBeUndefined();
    });

    it("sets graduatesStatus", () => {
      const filter = new OffersFilter();
      const attributes = { graduatesStatus: OfferStatus.rejected };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets an undefined graduatesStatus", () => {
      const filter = new OffersFilter();
      filter.setValues({ graduatesStatus: undefined });
      expect(filter.getValues().graduatesStatus).toBeUndefined();
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
        studentsStatus: OfferStatus.expired,
        graduatesStatus: OfferStatus.approved,
        careerCodes: ["1", "23"]
      });
      filter.clear();
      expect(filter.getValues()).toEqual({});
    });
  });
});
