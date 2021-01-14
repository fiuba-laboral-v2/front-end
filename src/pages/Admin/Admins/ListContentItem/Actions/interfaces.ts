import { IAdmin } from "$interfaces/Admin";

export interface ITranslations {
  editAdminTooltipMessage: string;
}

interface ICommonProps {
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  admin: IAdmin;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  editUserLink: string;
}
