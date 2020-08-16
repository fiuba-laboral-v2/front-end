import { applicantCareersInputArguments } from "$models/MutationArguments";

describe("applicantCareersInputArguments", () => {
  it("sets to undefined approvedSubjectCount and currentCareerYear if isGraduate", async () => {
    const inputVariables = [{
      isGraduate: true,
      careerCode: "10",
      approvedSubjectCount: 35,
      currentCareerYear: 5
    }];
    const variables = applicantCareersInputArguments(inputVariables);
    expect(variables).toEqual([{
      isGraduate: true,
      careerCode: "10",
      approvedSubjectCount: undefined,
      currentCareerYear: undefined
    }]);
  });

  it("returns the same input if is not graduate", async () => {
    const inputVariables = [{
      isGraduate: false,
      careerCode: "10",
      approvedSubjectCount: 35,
      currentCareerYear: 5
    }];
    const variables = applicantCareersInputArguments(inputVariables);
    expect(variables).toEqual(inputVariables);
  });
});
