import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Applicants } from "./Applicants";

const List: FunctionComponent = () => (
  <div>
    <NavBar />
    <div className="mainContent">
      <Applicants />
    </div>
  </div>
);

export { List };
