import React, { FunctionComponent } from "react";
import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";

export const Window: FunctionComponent<IWindowProps> = (
  {
    fixedNavbar = true,
    width = "focusCenter",
    children
  }
) => (
  <>
    <NavBar fixed={fixedNavbar} />
    <MainContent width={width} >
      {children}
    </MainContent>
  </>
);

interface IWindowProps {
  fixedNavbar?: boolean;
  width?: "focusCenter" | "wide";
}
