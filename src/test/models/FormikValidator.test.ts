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
});
