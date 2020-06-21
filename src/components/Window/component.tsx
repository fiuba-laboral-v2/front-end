import React, { FunctionComponent } from "react";
import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";
import { IMainContentProps } from "../MainContent/component";

export const Window: FunctionComponent<IMainContentProps> = (
  {
    width,
    children
  }
) => (
  <>
    <NavBar/>
    <MainContent width={width}>
      {children}
    </MainContent>
  </>
);
