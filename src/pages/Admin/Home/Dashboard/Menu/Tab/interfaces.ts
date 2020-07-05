import { FunctionComponent } from "react";
import { ApprovableEntityType } from "../../../../../../interfaces/Approvable";

export interface ITabContainerProps {
  selected: boolean;
  iconTitle: string;
  onClick: () => void;
  type: ApprovableEntityType;
}

export interface ITabProps extends Omit<ITabContainerProps, "type"> {
  Icon: FunctionComponent<IIcon>;
}

interface IIcon {
  className?: string;
}
