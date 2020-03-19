import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Title } from "./Title";
import { Detail } from "./Detail";

const Profile: FunctionComponent = () => (
  <div>
    <NavBar/>
    <div className="mainContent">
      <Title/>
      <Detail/>
    </div>
  </div>
);

export { Profile };
