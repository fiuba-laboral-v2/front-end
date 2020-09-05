import React, { FunctionComponent } from "react";
import { DesktopOnlyOverlay } from "./component";
import { useTranslations } from "$hooks/queries";
import { IDesktopOnlyOverlayTranslations } from "./interface";

export const DesktopOnlyOverlayContainer: FunctionComponent = () => {
  const translations = useTranslations<IDesktopOnlyOverlayTranslations>("desktopOnlyOverlay");
  return <DesktopOnlyOverlay translations={translations}/>;
};