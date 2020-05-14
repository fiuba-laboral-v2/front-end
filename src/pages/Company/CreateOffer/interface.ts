export interface ICreateOfferValues {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
  _form: string;
}

export interface ICreateOfferTranslations {
  formTitle: string;
  offerTitle: string;
  description: string;
  hoursPerDay: string;
  minimumSalary: string;
  maximumSalary: string;
  submit: string;
}

export interface ICreateOfferProps {
  onSubmit: (values: ICreateOfferValues) => void;
  translations: ICreateOfferTranslations;
}
