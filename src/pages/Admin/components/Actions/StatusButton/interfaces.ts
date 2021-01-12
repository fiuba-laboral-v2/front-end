import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IButtonProps } from "$components/Button";
import { FunctionComponent } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface ICommonProps extends IButtonProps {
  Icon: FunctionComponent<SvgIconProps>;
}

export enum DetailTarget {
  APPLICANT = "applicant",
  COMPANY = "company",
  BOTH = "both"
}

export interface IContainer extends ICommonProps {
  loading: boolean;
  status: ApprovalStatus;
  detailTarget: DetailTarget;
  setStatus: (status: ApprovalStatus, moderatorMessage?: string) => Promise<void>;
}

export interface ITranslations {
  approve: string;
  reject: string;
  confirmDialogDescriptionForCompanies: string;
  confirmDialogDescriptionForApplicants: string;
  confirmDialogDescriptionForBoth: string;
  confirmDialogCancel: string;
  rejectReasonLabel: string;
}

export interface IComponent extends ICommonProps {
  label: string;
}
