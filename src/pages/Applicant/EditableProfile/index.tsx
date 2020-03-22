import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Title } from "./Title";
import { EditableDetail } from "./EditableDetail";
import { MainContent } from "$components/MainContent";

const EditableProfile: FunctionComponent = () => (
  <div>
    <NavBar/>
    <MainContent>
      <Title/>
      <EditableDetail/>
    </MainContent>
  </div>
);

export { EditableProfile };
