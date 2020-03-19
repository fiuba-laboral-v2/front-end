import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Title } from "./Title";
import { EditableDetail } from "./EditableDetail";

const EditableProfile: FunctionComponent = () => (
  <div>
    <NavBar />
    <div className="mainContent">
      <Title />
      <EditableDetail />
    </div>
  </div>
);

export { EditableProfile };
