import { IApplicantCareer } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";
import { ApprovalStatus } from "../ApprovalStatus";

export enum ApplicantType {
  graduate = "graduate",
  student = "student",
  both = "both"
}

export const targetApplicantTypeEnumValues = [
  ApplicantType.graduate,
  ApplicantType.student,
  ApplicantType.both
];

export interface IOfferSection {
  uuid?: string;
  title: string;
  text: string;
  displayOrder: number;
}

export interface IOffer {
  uuid: string;
  company: ICompany;
  title: string;
  description: string;
  targetApplicantType: ApplicantType;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
  sections?: IOfferSection[];
  careers?: IApplicantCareer[];
}
