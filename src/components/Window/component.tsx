import React, { FunctionComponent, useState } from "react";
import { MainContent } from "../MainContent";
import { IMainContentProps } from "../MainContent/component";
import { DesktopOnlyOverlay } from "./DesktopOnlyOverlay";
import styles from "./styles.module.scss";
import { TitleBar } from "../TitleBar";
import { NavBar } from "../NavBar";
import { Drawer } from "@material-ui/core";
import classNames from "classnames";

export const Window: FunctionComponent<IWindowProps> = ({
  desktopOnly,
  alwaysHideNavbar = false,
  children,
  ...props
}) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

  return (
    <>
      <TitleBar alwaysShowDrawerButton={alwaysHideNavbar} toggleDrawer={toggleDrawer} />
      <Drawer open={drawerIsOpen} onClose={toggleDrawer}>
        <NavBar toggleDrawer={toggleDrawer} inDrawer />
      </Drawer>
      <div className={styles.mainBody}>
        <NavBar
          className={classNames(styles.desktopNavBar, styles.navBar, {
            [styles.alwaysHide]: alwaysHideNavbar
          })}
        />
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

export interface IWindowProps extends IMainContentProps {
  desktopOnly?: boolean;
  alwaysHideNavbar?: boolean;
}
