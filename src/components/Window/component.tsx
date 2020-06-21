import React, { FunctionComponent } from "react";
import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";
import { INavBarProps } from "../NavBar/container";
import { IMainContentProps } from "../MainContent/component";

export const Window: FunctionComponent<INavBarProps & IMainContentProps> = (
  {
    fixed,
    width,
    children
  }
) => (
  <>
    <NavBar fixed={fixed}/>
    <MainContent width={width}>
      {children}
    </MainContent>
  </>
);
