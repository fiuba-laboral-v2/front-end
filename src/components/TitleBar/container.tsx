import React, { FunctionComponent } from "react";
import { TitleBar } from "./component";
import { ITitleBarContainerProps, ITranslations } from "./interface";
import { useTranslations } from "../../models/hooks/queries";

export const TitleBarContainer: FunctionComponent<ITitleBarContainerProps> = props => {
  const translations = useTranslations<ITranslations>("titleBar");

  return <TitleBar title={translations?.title} {...props} />;
};
