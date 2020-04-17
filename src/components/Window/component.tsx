import React, { FunctionComponent } from "react";
import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";

export const Window: FunctionComponent<IWindow> = (
  {
    className,
    children
  }
) => (
  <>
    <NavBar/>
    <MainContent className={className}>
      {children}
    </MainContent>
  </>
);

interface IWindow {
  className?: string;
}
