import { IAdmin } from "$interfaces/Admin";
import { IApplicant } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { ReactNode } from "react";

export type Listable = IApplicant | ICompany | IAdmin;
export type ListableReactNodes =
  ((applicant: IApplicant) => ReactNode) |
  ((company: ICompany) => ReactNode) |
  ((admin: IAdmin) => ReactNode);
