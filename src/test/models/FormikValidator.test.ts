import { FormikValidator } from "$models/FormikValidator";

describe("FormikValidator", () => {
  describe("When it only validate a mandatory value", () => {
    const expectToReceiveMandatoryMessageError = <Value>(value: Value) => {
      const validator = FormikValidator({ mandatory: true });
      expect(validator(value)).toEqual("Este campo es obligatorio");
    };

    it("returns message error if given an empty string", async () => {
      expectToReceiveMandatoryMessageError("");
    });

    it("returns message error if given a null value", async () => {
      expectToReceiveMandatoryMessageError(null);
    });

    it("returns message error if given an undefined value", async () => {
      expectToReceiveMandatoryMessageError(undefined);
    });

    it("returns message error if given an empty object", async () => {
      expectToReceiveMandatoryMessageError({});
    });

    it("returns message error if given an empty array", async () => {
      expectToReceiveMandatoryMessageError([]);
    });
  });

  describe("When it only uses the given validator", () => {
    const errorMessage = "My custom error message";
    const customFailingValidator = () => {
      throw new Error(errorMessage);
    };

    it("throws an error if the validator fails", async () => {
      const validator = FormikValidator({ validator: customFailingValidator });
      expect(validator("any value")).toEqual(errorMessage);
    });

    it("returns undefined if the validator does not fail", async () => {
      const validator = FormikValidator({ validator: () => true });
      expect(validator("any value")).toBeUndefined();
    });

    it("skips validator if given a null value", async () => {
      const validator = FormikValidator({ validator: customFailingValidator });
      expect(validator(null)).toBeUndefined();
    });

    it("skips validator if given an undefined value", async () => {
      const validator = FormikValidator({ validator: customFailingValidator });
      expect(validator(undefined)).toBeUndefined();
    });

    it("skips validator if given an empty array value", async () => {
      const validator = FormikValidator({ validator: customFailingValidator });
      expect(validator([])).toBeUndefined();
    });

    it("skips validator if given an empty object value", async () => {
      const validator = FormikValidator({ validator: customFailingValidator });
      expect(validator({})).toBeUndefined();
    });
  });
});
