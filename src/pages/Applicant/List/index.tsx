import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Applicants } from "./Applicants";
import { Title } from "./Title";

const List: FunctionComponent = () => (
  <div>
    <NavBar />
    <div className="mainContent">
      <Title/>
      <Applicants />
    </div>
  </div>
);

export { List };
