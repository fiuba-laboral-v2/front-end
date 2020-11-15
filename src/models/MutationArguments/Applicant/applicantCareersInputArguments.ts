import { IApplicantCareerInput } from "$interfaces/Applicant";

export const applicantCareersInputArguments = (applicantCareers: IApplicantCareerInput[]) =>
  applicantCareers.map(applicantCareer => ({
    ...applicantCareer,
    currentCareerYear: Number(applicantCareer.currentCareerYear),
    ...(applicantCareer.isGraduate && {
      approvedSubjectCount: undefined,
      currentCareerYear: undefined
    })
  }));
