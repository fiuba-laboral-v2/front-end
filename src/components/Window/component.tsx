import React, { FunctionComponent, useState } from "react";
import { MainContent } from "../MainContent";
import { IMainContentProps } from "../MainContent/component";
import { DesktopOnlyOverlay } from "./DesktopOnlyOverlay";
import styles from "./styles.module.scss";
import { TitleBar } from "../TitleBar";
import { NavBar } from "../NavBar";
import { Drawer } from "@material-ui/core";
import classNames from "classnames";
import { LoadingSpinner } from "../LoadingSpinner";

export const Window: FunctionComponent<IWindowProps> = ({
  desktopOnly,
  alwaysHideNavbar = false,
  withoutNavBar = false,
  loading = false,
  children,
  className,
  ...props
}) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

  return (
    <>
      <TitleBar
        showNavBar={!withoutNavBar}
        alwaysShowDrawerButton={alwaysHideNavbar}
        toggleDrawer={toggleDrawer}
      />
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
          {loading && <LoadingSpinner />}
          <MainContent
            {...props}
            className={classNames(className, {
              [styles.desktopOnly]: desktopOnly,
              [styles.hidden]: loading
            })}
          >
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
  withoutNavBar?: boolean;
  loading?: boolean;
}
