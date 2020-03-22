import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Title } from "./Title";
import { Detail } from "./Detail";
import { MainContent } from "$components/MainContent";

const Profile: FunctionComponent = () => (
  <div>
    <NavBar/>
    <MainContent>
      <Title/>
      <Detail/>
    </MainContent>
  </div>
);

export { Profile };
