import { AdminTaskType } from "$interfaces/AdminTask";
import { FunctionComponent } from "react";

export interface IApprovableTypeTabContainerProps {
  className?: string;
  iconTitle: string;
  color: "red" | "blue";
  Icon: FunctionComponent<IIcon>;
  types: AdminTaskType[];
  type: AdminTaskType;
  onClick: (selected: boolean, adminTaskType: AdminTaskType) => void;
}

export interface IApprovableTypeTabProps extends
  Omit<IApprovableTypeTabContainerProps, "onClick" | "type" | "types"> {
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
