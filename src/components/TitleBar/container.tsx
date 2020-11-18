import React, { FunctionComponent } from "react";
import { TitleBar } from "./component";
import { ITitleBarContainerProps, ITranslations } from "./interfaces";
import { useCurrentUser, useTranslations } from "../../models/hooks/queries";

export const TitleBarContainer: FunctionComponent<ITitleBarContainerProps> = props => {
  const translations = useTranslations<ITranslations>("titleBar");
  const currentUser = useCurrentUser();

  return (
    <TitleBar
      title={translations?.title}
      showNavBar={!!currentUser.data.getCurrentUser}
      {...props}
    />
  );
};
