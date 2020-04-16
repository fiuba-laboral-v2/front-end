import { ICareer } from "$interfaces/Applicant";
import { ICompany } from "$interfaces/Company";

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
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  createdAt: string;
  sections?: IOfferSection[];
  careers?: ICareer[];
}
