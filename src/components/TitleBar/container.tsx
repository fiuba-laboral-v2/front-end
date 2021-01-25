import React, { FunctionComponent } from "react";
import { TitleBar } from "./component";
import { ITitleBarContainerProps, ITranslations } from "./interfaces";
import { useCurrentUser, useTranslations } from "$hooks";

export const TitleBarContainer: FunctionComponent<ITitleBarContainerProps> = ({
  showNavBar,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("titleBar");
  const currentUser = useCurrentUser().data.getCurrentUser;

  const canChangeCurrentRole = () => {
    if (!currentUser) return false;
    if (currentUser?.company) return false;
    return !(!currentUser.admin || !currentUser.applicant);
  };

  return (
    <TitleBar
      canChangeCurrentRole={canChangeCurrentRole}
      title={translations?.title}
      showNavBar={!!currentUser && showNavBar}
      {...props}
    />
  );
};
