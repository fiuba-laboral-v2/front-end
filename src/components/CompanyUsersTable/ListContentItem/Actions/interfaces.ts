import { ICompanyUser } from "$interfaces/CompanyUser";

export interface ITranslations {
  passwordTooltipMessage: string;
}

interface ICommonProps {
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  companyUser: ICompanyUser;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  hideChangePasswordIcon: () => boolean;
  link: string;
}
