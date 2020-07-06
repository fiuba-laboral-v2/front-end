import { ApprovableEntityType } from "$interfaces/Approvable";
import { FunctionComponent } from "react";

export interface IApprovableTypeTabContainerProps {
  iconTitle: string;
  types: ApprovableEntityType[];
  type: ApprovableEntityType;
  onClick: (selected: boolean, entityType: ApprovableEntityType) => void;
}

export interface IApprovableTypeTabProps {
  color: "red" | "blue";
  iconTitle: string;
  Icon: FunctionComponent<IIcon>;
  toggleSelected: () => void;
  selected: boolean;
}

interface IIcon {
  className?: string;
}
