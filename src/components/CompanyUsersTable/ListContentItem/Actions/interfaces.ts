import { ICompanyUser } from "$interfaces/CompanyUser";

export interface ITranslations {
  passwordTooltipMessage: string;
  editUserTooltipMessage: string;
}

interface ICommonProps {
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  companyUser: ICompanyUser;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  hideActions: () => boolean;
  changePasswordLink: string;
  editUserLink: string;
}
