import { IApplicant } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { ReactNode } from "react";

export type Listable = IApplicant | ICompany;
export type ListableReactNodes =
  ((applicant: IApplicant) => ReactNode) | ((company: ICompany) => ReactNode);
