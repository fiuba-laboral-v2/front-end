import React, { FunctionComponent } from "react";
import NavBar from "$components/NavBar";
import { Title } from "./Title";
import { DetailEditable } from "./DetailEditable";

const EditableDetail: FunctionComponent = () => (
  <div>
    <NavBar />
    <div className="mainContent">
      <Title />
      <DetailEditable />
    </div>
  </div>
);

export default EditableDetail;
