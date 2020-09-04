import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { IDesktopOnlyOverlayTranslations } from "./interface";

export const DesktopOnlyOverlay: FunctionComponent<IDesktopOnlyOverlayProps> = (
  { translations }
) => (
  <div className={styles.desktopOnlyOverlay}>
    <AspectRatioIcon className={styles.icon}/>
    <p>{translations?.message}</p>
  </div>
);

interface IDesktopOnlyOverlayProps {
  translations?: IDesktopOnlyOverlayTranslations;
}
