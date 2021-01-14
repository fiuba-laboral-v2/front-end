import { IAdmin } from "$interfaces/Admin";

export interface ITranslations {
  editAdminTooltipMessage: string;
  deactivateAccountLinkTooltipMessage: string;
  activateAccountLinkTooltipMessage: string;
}

export interface IContainerProps {
  className?: string;
  admin: IAdmin;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  editUserLink: string;
  deactivateAccountLink: string;
  activateAccountLink: string;
}
