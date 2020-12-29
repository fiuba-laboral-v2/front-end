import { ApplicantType } from "$interfaces/Applicant";
import { useMyApplicantProfile } from ".";

export const useCurrentApplicantType = () => {
  const applicant = useMyApplicantProfile();
  const isGraduate = applicant?.careers.some(({ isGraduate: hasGraduated }) => hasGraduated);
  return isGraduate ? ApplicantType.graduate : ApplicantType.student;
};
