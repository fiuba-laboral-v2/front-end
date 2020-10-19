import { FunctionComponent } from "react";

export interface INavBarLink {
  path: string;
  title: string;
  tooltipMessage?: string;
  icon: FunctionComponent;
}
