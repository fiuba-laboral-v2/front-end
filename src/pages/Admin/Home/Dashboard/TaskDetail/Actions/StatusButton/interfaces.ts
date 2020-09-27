import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IButtonProps } from "$components/Button";
import { FunctionComponent } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface ICommonProps extends IButtonProps {
  Icon: FunctionComponent<SvgIconProps>;
  setStatus: (status: ApprovalStatus) => Promise<void>;
  status: ApprovalStatus;
}

export interface IContainer extends ICommonProps {
  loading: boolean;
}

export interface ITranslations {
  approve: string;
  reject: string;
}

export interface IComponent extends ICommonProps {
  label: string;
}
