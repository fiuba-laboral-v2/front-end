import { updateCurrentApplicantArguments } from "$models/MutationArguments";

describe("updateCurrentApplicantArguments", () => {
  it("returns the variables for the useUpdateCurrentApplicant mutation", async () => {
    const inputVariables = {
      user: {
        name: "name",
        surname: "surname"
      },
      padron: 98534,
      description: "description",
      links: [],
      careers: [],
      capabilities: [],
      sections: []
    };
    const variables = updateCurrentApplicantArguments(inputVariables);
    expect(variables).toEqual(inputVariables);
  });

  it("returns the variables with each capability description mapped", async () => {
    const inputVariables = {
      user: {
        name: "name",
        surname: "surname"
      },
      padron: 98534,
      description: "description",
      links: [],
      careers: [],
      sections: [],
      capabilities: [
        { description: "description1" },
        { description: "description2" },
        { description: "description3" }
      ]
    };
    const variables = updateCurrentApplicantArguments(inputVariables);
    expect(variables).toEqual({
      ...inputVariables,
      capabilities: inputVariables.capabilities.map(({ description }) => description)
    });
  });

  it("sets to undefined approvedSubjectCount and currentCareerYear if isGraduate", async () => {
    const inputVariables = {
      user: {
        name: "name",
        surname: "surname"
      },
      padron: 98534,
      description: "description",
      links: [],
      capabilities: [],
      sections: [],
      careers: [{
        isGraduate: true,
        careerCode: "10",
        approvedSubjectCount: 35,
        currentCareerYear: 5
      }]
    };
    const variables = updateCurrentApplicantArguments(inputVariables);
    expect(variables).toEqual({
      ...inputVariables,
      careers: [{
        isGraduate: true,
        careerCode: "10",
        approvedSubjectCount: undefined,
        currentCareerYear: undefined
      }]
    });
  });
});
