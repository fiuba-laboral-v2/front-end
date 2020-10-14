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
      capabilities: [
        { description: "description1" },
        { description: "description2" },
        { description: "description3" }
      ],
      knowledgeSections: [],
      experienceSections: []
    };
    const variables = updateCurrentApplicantArguments(inputVariables);
    expect(variables).toEqual(inputVariables);
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
      knowledgeSections: [],
      experienceSections: [],
      careers: [
        {
          isGraduate: true,
          careerCode: "10",
          approvedSubjectCount: 35,
          currentCareerYear: 5
        }
      ]
    };
    const variables = updateCurrentApplicantArguments(inputVariables);
    expect(variables).toEqual({
      ...inputVariables,
      careers: [
        {
          isGraduate: true,
          careerCode: "10",
          approvedSubjectCount: undefined,
          currentCareerYear: undefined
        }
      ]
    });
  });
});
