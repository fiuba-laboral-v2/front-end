import { OfferFilter } from "$models/OfferFilter";

describe("OfferFilter", () => {
  describe("careerCodes", () => {
    it("gets career codes from url search params", () => {
      const offerFilter = new OfferFilter("carreras=1-2-3");
      expect(offerFilter.careerCodes()).toEqual(["1", "2", "3"]);
    });

    it("gives an empty array when no career is set", () => {
      const offerFilter = new OfferFilter("carreras=&asd=qwe");
      expect(offerFilter.careerCodes()).toEqual([]);
    });

    it("gives an empty array when all careers are set", () => {
      const offerFilter = new OfferFilter("carreras=todas&asd=qwe");
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

    it("gives an empty array when career has only dashes", () => {
      const offerFilter = new OfferFilter("carreras=--");
      expect(offerFilter.careerCodes()).toEqual([]);
    });
  });

  describe("addCareer", () => {
    it("adds a career to search params", () => {
      const offerFilter = new OfferFilter("carreras=1-2-3");
      offerFilter.addCareer("4");
      expect(offerFilter.toString()).toEqual("carreras=1-2-3-4");
    });

    it("adds careers to empty offer filter", () => {
      const offerFilter = new OfferFilter();
      offerFilter.addCareer("1");
      offerFilter.addCareer("3");
      expect(offerFilter.toString()).toEqual("carreras=1-3");
    });

    it("adds careers when there were none", () => {
      const offerFilter = new OfferFilter("asd=qwe");
      offerFilter.addCareer("4");
      expect(offerFilter.toString()).toEqual("asd=qwe&carreras=4");
    });

    it("adds careers when career has only dashes", () => {
      const offerFilter = new OfferFilter("carreras=--");
      offerFilter.addCareer("10");
      expect(offerFilter.toString()).toEqual("carreras=10");
    });
  });

  describe("removeCareer", () => {
    it("removes a career from search params", () => {
      const offerFilter = new OfferFilter("carreras=1-2-3");
      offerFilter.removeCareer("2");
      expect(offerFilter.toString()).toEqual("carreras=1-3");
    });

    it("does nothing when removing from empty search params", () => {
      const offerFilter = new OfferFilter();
      offerFilter.removeCareer("1");
      expect(offerFilter.toString()).toEqual("carreras=todas");
    });

    it("does nothing when removing careers when there are none", () => {
      const offerFilter = new OfferFilter("asd=qwe");
      offerFilter.removeCareer("4");
      expect(offerFilter.toString()).toEqual("asd=qwe&carreras=todas");
    });

    it("removes all careers", () => {
      const offerFilter = new OfferFilter("carreras=6-9");
      offerFilter.removeCareer("9");
      offerFilter.removeCareer("6");
      expect(offerFilter.toString()).toEqual("carreras=todas");
    });
  });
});
