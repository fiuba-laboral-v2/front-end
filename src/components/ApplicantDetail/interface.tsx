export interface IApplicantDetailProps {
  name: string;
  surname: string;
  padron: number;
  description: string;
  credits: number;
  careers?: string[];
  capabilities?: string[];
}
