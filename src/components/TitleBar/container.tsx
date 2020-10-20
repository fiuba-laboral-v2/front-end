import React, { FunctionComponent } from "react";
import { TitleBar } from "./component";
import { ITitleBarContainerProps } from "./interface";

export const TitleBarContainer: FunctionComponent<ITitleBarContainerProps> = props => {
  return <TitleBar title={"Bolsa de trabajo FIUBA"} {...props} />;
};
