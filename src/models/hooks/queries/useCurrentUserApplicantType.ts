import { ApplicantType } from "$interfaces/Applicant";
import { useMyApplicantProfile } from ".";

export const useCurrentUserApplicantType = () => {
  const applicant = useMyApplicantProfile();
  const isGraduate = applicant?.careers.some(applicantCareer => applicantCareer.isGraduate);
  const isStudent = applicant?.careers.some(applicantCareer => !applicantCareer.isGraduate);

  if (isStudent && isGraduate) return ApplicantType.both;
  if (isStudent) return ApplicantType.student;
  return ApplicantType.graduate;
};
