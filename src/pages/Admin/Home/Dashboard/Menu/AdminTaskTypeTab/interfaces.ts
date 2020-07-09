import { TAdminTaskType } from "$interfaces/AdminTask";
import { FunctionComponent } from "react";

export interface IAdminTaskTypeTabContainerProps {
  className?: string;
  iconTitle: string;
  color: "red" | "blue";
  Icon: FunctionComponent<IIcon>;
  types: TAdminTaskType[];
  type: TAdminTaskType;
  onClick: (selected: boolean, adminTaskType: TAdminTaskType) => void;
}

export interface IAdminTaskTypeTabProps extends
  Omit<IAdminTaskTypeTabContainerProps, "onClick" | "type" | "types"> {
  className?: string;
  color: "red" | "blue";
  iconTitle: string;
  Icon: FunctionComponent<IIcon>;
  toggleSelected: () => void;
  selected: boolean;
}

interface IIcon {
  className?: string;
}
