import React, { FunctionComponent, useState } from "react";
import { MainContent } from "../MainContent";
import { IMainContentProps } from "../MainContent/component";
import { DesktopOnlyOverlay } from "./DesktopOnlyOverlay";
import styles from "./styles.module.scss";
import { TitleBar } from "../TitleBar";
import { NavBar } from "../NavBar";
import { Drawer } from "@material-ui/core";

export const Window: FunctionComponent<IWindowProps> = ({
  desktopOnly,
  hideNavBar = false,
  children,
  ...props
}) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

  return (
    <>
      <TitleBar withDrawerButton={hideNavBar} toggleDrawer={toggleDrawer} />
      {hideNavBar && (
        <Drawer open={drawerIsOpen} onClose={toggleDrawer}>
          <NavBar inDrawer />
        </Drawer>
      )}
      <div className={styles.mainBody}>
        {!hideNavBar && <NavBar />}
        <div className={styles.mainContentContainer}>
          {desktopOnly && <DesktopOnlyOverlay />}
          <MainContent {...props} {...(desktopOnly && { className: styles.desktopOnly })}>
            {children}
          </MainContent>
        </div>
      </div>
    </>
  );
};

interface IWindowProps extends IMainContentProps {
  desktopOnly?: boolean;
  hideNavBar?: boolean;
}
