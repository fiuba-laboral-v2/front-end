import { ICompanyUser } from "$interfaces/CompanyUser";
import { VisibleAction } from "../../index";

export interface ITranslations {
  passwordTooltipMessage: string;
  editUserTooltipMessage: string;
  deleteUserTooltipMessage: string;
}

interface ICommonProps {
  className?: string;
  visibleActions: VisibleAction[];
}

export interface IContainerProps extends ICommonProps {
  companyUser: ICompanyUser;
}

export interface IComponentProps extends ICommonProps {
  translations: ITranslations;
  isCurrentUser: () => boolean;
  changePasswordLink: string;
  editUserLink: string;
  deleteUserLink: string;
}
