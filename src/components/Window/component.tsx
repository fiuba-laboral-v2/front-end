import React, { FunctionComponent } from "react";
import { MainContent } from "../MainContent";
import { IMainContentProps } from "../MainContent/component";
import { DesktopOnlyOverlay } from "./DesktopOnlyOverlay";
import styles from "./styles.module.scss";
import { TitleBar } from "../TitleBar";
import { NavBar } from "../NavBar";

export const Window: FunctionComponent<IWindowProps> = ({ desktopOnly, children, ...props }) => (
  <>
    <TitleBar />
    <div className={styles.mainBody}>
      <NavBar />
      <div className={styles.mainContentContainer}>
        {desktopOnly && <DesktopOnlyOverlay />}
        <MainContent {...props} {...(desktopOnly && { className: styles.desktopOnly })}>
          {children}
        </MainContent>
      </div>
    </div>
  </>
);

interface IWindowProps extends IMainContentProps {
  desktopOnly?: boolean;
  navbarWidth?: "auto" | "narrow" | "hidden"; // TODO: hacerlo obligatorio
}
