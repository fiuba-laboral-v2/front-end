import { saveOfferArguments } from "$models/MutationArguments";

describe("saveOfferArguments", () => {
  it("sets maximumSalary to NaN if offer is internship", async () => {
    const variables = saveOfferArguments({ isInternship: true, maximumSalary: 5 });
    expect(variables).toEqual({ isInternship: true, maximumSalary: NaN });
  });

  it("returns the same input if offer is not internship", async () => {
    const inputVariables = { isInternship: false, maximumSalary: 5 };
    const variables = saveOfferArguments(inputVariables);
    expect(variables).toEqual(inputVariables);
  });
});
