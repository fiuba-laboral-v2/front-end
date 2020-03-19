import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Title } from "./Profile/Title";
import { Detail } from "./Profile/Detail";

const Company: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <Title/>
      <Detail/>
    </div>
  </div>
);

export default Company;
