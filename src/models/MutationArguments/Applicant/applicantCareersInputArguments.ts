import { IApplicantCareerInput } from "$interfaces/Applicant";

export const applicantCareersInputArguments = (applicantCareers: IApplicantCareerInput[]) =>
  applicantCareers.map(applicantCareer => ({
    ...applicantCareer,
    ...(applicantCareer.isGraduate && {
      approvedSubjectCount: NaN,
      currentCareerYear: NaN
    })
  }));
