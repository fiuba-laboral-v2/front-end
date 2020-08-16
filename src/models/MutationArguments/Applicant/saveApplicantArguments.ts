import { ISaveApplicant } from "$hooks";
import { applicantCareersInputArguments } from "./applicantCareersInputArguments";

export const saveApplicantArguments = ({ careers, ...values }: ISaveApplicant) => ({
  ...values,
  careers: applicantCareersInputArguments(careers)
});
