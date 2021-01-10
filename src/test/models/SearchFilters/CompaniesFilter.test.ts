import { CompaniesFilter } from "$models/SearchFilters/CompaniesFilter";

describe("CompaniesFilter", () => {
  describe("Getters", () => {
    describe("getCompanyName", () => {
      it("returns name from url search params", () => {
        const filter = new CompaniesFilter("nombre-de-empresa=Devartis");
        expect(filter.getCompanyName()).toEqual("Devartis");
      });

      it("returns an empty string when no companyName is set", () => {
        const filter = new CompaniesFilter("nombre-de-empresa&asd=qwe");
        expect(filter.getCompanyName()).toEqual("");
      });

      it("returns null if the companyName is not in search params", () => {
        const filter = new CompaniesFilter("asd=qwe");
        expect(filter.getCompanyName()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new CompaniesFilter("");
        expect(filter.getCompanyName()).toBeUndefined();
      });
    });

    describe("getBusinessSector", () => {
      it("returns businessSector from url search params", () => {
        const filter = new CompaniesFilter("rubro=Tecnología");
        expect(filter.getBusinessSector()).toEqual("Tecnología");
      });

      it("returns an empty string when no businessSector is set", () => {
        const filter = new CompaniesFilter("rubro&asd=qwe");
        expect(filter.getBusinessSector()).toEqual("");
      });

      it("returns null if the businessSector is not in search params", () => {
        const filter = new CompaniesFilter("asd=qwe");
        expect(filter.getBusinessSector()).toBeUndefined();
      });

      it("returns null when search params are empty", () => {
        const filter = new CompaniesFilter("");
        expect(filter.getBusinessSector()).toBeUndefined();
      });
    });
  });

  describe("setFilter", () => {
    it("sets companyName and businessSector", () => {
      const filter = new CompaniesFilter();
      const attributes = { companyName: "Devartis", businessSector: "Servicios" };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets companyName", () => {
      const filter = new CompaniesFilter();
      const attributes = { companyName: "Devartis" };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });

    it("sets businessSector", () => {
      const filter = new CompaniesFilter();
      const attributes = { businessSector: "Viajes" };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });
  });

  describe("clear", () => {
    it("clears all filters", () => {
      const filter = new CompaniesFilter();
      filter.setValues({ companyName: "Devartis", businessSector: "Servicios" });
      filter.clear();
      expect(filter.getValues()).toEqual({});
    });
  });
});
