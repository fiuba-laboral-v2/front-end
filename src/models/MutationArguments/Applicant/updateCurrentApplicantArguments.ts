import {
  IApplicantEditableValues
} from "$pages/Applicant/EditableProfile/EditableDetail/interface";
import { applicantCareersInputArguments } from "./applicantCareersInputArguments";

export const updateCurrentApplicantArguments = (values: IApplicantEditableValues) => ({
  ...values,
  capabilities: values.capabilities.map(capability => capability.description),
  careers: applicantCareersInputArguments(values.careers)
});
