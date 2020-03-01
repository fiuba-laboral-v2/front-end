import { ReactElement } from "react";

export interface IEditable {
  editableComponent: ReactElement;
  staticComponent: ReactElement;
  onClick?: () => void;
}
