import React, { FunctionComponent, Fragment } from "react";
import { DesktopOnlyOverlay } from "./component";
import { useTranslations } from "$hooks/queries";
import { IDesktopOnlyOverlayTranslations } from "./interfaces";

export const DesktopOnlyOverlayContainer: FunctionComponent = () => {
  const translations = useTranslations<IDesktopOnlyOverlayTranslations>("desktopOnlyOverlay");
  if (!translations) return <Fragment />;
  return <DesktopOnlyOverlay translations={translations} />;
};
