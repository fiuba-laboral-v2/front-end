import { CompanyOffersFilter } from "$models/SearchFilters/CompanyOffersFilter";

describe("CompanyOffersFilter", () => {
  describe("Getters", () => {
    describe("getHideRejectedAndExpiredOffers", () => {
      it("returns true from url search params", () => {
        const filter = new CompanyOffersFilter("ocultar-ofertar-rechazadas-y-expiradas=true");
        expect(filter.getHideRejectedAndExpiredOffers()).toBe(true);
      });

      it("returns false from url search params", () => {
        const filter = new CompanyOffersFilter("ocultar-ofertar-rechazadas-y-expiradas=false");
        expect(filter.getHideRejectedAndExpiredOffers()).toBe(false);
      });

      it("returns false when if the value it is not set", () => {
        const filter = new CompanyOffersFilter("ocultar-ofertar-rechazadas-y-expiradas&asd=qwe");
        expect(filter.getHideRejectedAndExpiredOffers()).toBe(false);
      });

      it("returns false if the value is not in search params", () => {
        const filter = new CompanyOffersFilter("asd=qwe");
        expect(filter.getHideRejectedAndExpiredOffers()).toBe(false);
      });

      it("returns false when search params are empty", () => {
        const filter = new CompanyOffersFilter("");
        expect(filter.getHideRejectedAndExpiredOffers()).toBe(false);
      });
    });
  });

  describe("setFilter", () => {
    it("sets all values", () => {
      const filter = new CompanyOffersFilter();
      const attributes = { hideRejectedAndExpiredOffers: true };
      filter.setValues(attributes);
      expect(filter.getValues()).toEqual(attributes);
    });
  });
});
