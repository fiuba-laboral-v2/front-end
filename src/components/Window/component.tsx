import React, { FunctionComponent } from "react";
import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";
import { IMainContentProps } from "../MainContent/component";
import { DesktopOnlyOverlay } from "./DesktopOnlyOverlay";
import styles from "./styles.module.scss";

export const Window: FunctionComponent<IWindowProps> = ({ desktopOnly, children, ...props }) => (
  <>
    <NavBar />
    {desktopOnly && <DesktopOnlyOverlay />}
    <MainContent {...props} {...(desktopOnly && { className: styles.desktopOnly })}>
      {children}
    </MainContent>
  </>
);

interface IWindowProps extends IMainContentProps {
  desktopOnly?: boolean;
}
