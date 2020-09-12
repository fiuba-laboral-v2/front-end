import { OfferFilter } from "$models/OfferFilter";

describe("OfferFilter", () => {
  describe("careerCodes", () => {
    it("gets career codes from url search params", () => {
      const offerFilter = new OfferFilter("carreras=1,2,3");
      expect(offerFilter.careerCodes()).toEqual(["1", "2", "3"]);
    });

    it("gives an empty array when no carrer is set", () => {
      const offerFilter = new OfferFilter("carreras=&asd=qwe");
      expect(offerFilter.careerCodes()).toEqual([]);
    });

    it("gives an empty array when careers are not in search params", () => {
      const offerFilter = new OfferFilter("asd=qwe");
      expect(offerFilter.careerCodes()).toEqual([]);
    });

    it("gives an empty array when search params are empty", () => {
      const offerFilter = new OfferFilter("");
      expect(offerFilter.careerCodes()).toEqual([]);
    });

    it("gives an empty array when career has only commas", () => {
      const offerFilter = new OfferFilter("carreras=,,");
      expect(offerFilter.careerCodes()).toEqual([]);
    });
  });
});
