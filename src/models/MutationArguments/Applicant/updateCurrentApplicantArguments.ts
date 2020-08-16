import { IUpdateCurrentApplicantVariables } from "$hooks";
import { applicantCareersInputArguments } from "./applicantCareersInputArguments";

export const updateCurrentApplicantArguments = (values: IUpdateCurrentApplicantVariables) => ({
  ...values,
  careers: applicantCareersInputArguments(values.careers)
});
