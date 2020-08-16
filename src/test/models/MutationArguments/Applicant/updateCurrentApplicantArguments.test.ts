import { updateCurrentApplicantArguments } from "$models/MutationArguments";

describe("updateCurrentApplicantArguments", () => {
  it("returns the variables for the useUpdateCurrentApplicant mutation", async () => {
    const name = "name";
    const surname = "surname";
    const inputVariables = {
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      description: "description",
      links: [],
      careers: [],
      capabilities: [],
      sections: []
    };
    const variables = updateCurrentApplicantArguments({ ...inputVariables, name, surname });
    expect(variables).toEqual({
      user: {
        name,
        surname
      },
      ...inputVariables
    });
  });

  it("returns the variables with each capability description mapped", async () => {
    const name = "name";
    const surname = "surname";
    const inputVariables = {
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      description: "description",
      links: [],
      careers: [],
      capabilities: [
        { description: "description1" },
        { description: "description2" },
        { description: "description3" }
      ],
      sections: []
    };
    const variables = updateCurrentApplicantArguments({ ...inputVariables, name, surname });
    expect(variables).toEqual({
      user: {
        name,
        surname
      },
      ...inputVariables,
      capabilities: inputVariables.capabilities.map(({ description }) => description)
    });
  });

  it("sets to undefined approvedSubjectCount and currentCareerYear if isGraduate", async () => {
    const name = "name";
    const surname = "surname";
    const inputVariables = {
      uuid: "4c925fdc-8fd4-47ed-9a24-fa81ed5cc9da",
      description: "description",
      links: [],
      careers: [{
        isGraduate: true,
        careerCode: "10",
        approvedSubjectCount: 35,
        currentCareerYear: 5
      }],
      capabilities: [],
      sections: []
    };
    const variables = updateCurrentApplicantArguments({ ...inputVariables, name, surname });
    expect(variables).toEqual({
      user: { name, surname },
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
