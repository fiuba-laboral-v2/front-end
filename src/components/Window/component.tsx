import React, { FunctionComponent } from "react";

import { NavBar } from "../NavBar";
import { MainContent } from "../MainContent";

export const Window: FunctionComponent = ({ children }) => (
  <div>
    <NavBar/>
    <MainContent>
      {children}
    </MainContent>
  </div>
);
