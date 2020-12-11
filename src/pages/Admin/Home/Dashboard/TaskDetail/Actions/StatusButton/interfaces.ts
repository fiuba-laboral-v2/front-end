import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IButtonProps } from "$components/Button";
import { FunctionComponent } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface ICommonProps extends IButtonProps {
  Icon: FunctionComponent<SvgIconProps>;
}

export interface IContainer extends ICommonProps {
  loading: boolean;
  status: ApprovalStatus;
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
}

export interface ITranslations {
  approve: string;
  reject: string;
  confirmDialogDescription: string;
  confirmDialogCancel: string;
}

export interface IComponent extends ICommonProps {
  label: string;
}
